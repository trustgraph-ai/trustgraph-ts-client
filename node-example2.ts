#!/usr/bin/env node

import WebSocket from 'ws';

// Configuration
const TRUSTGRAPH_URL = 'http://localhost:8888/api/socket';

// Simple ID generator
function makeid(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

interface InflightRequest {
    resolve: (result: any) => void;
    reject: (error: Error) => void;
}

interface FlowResponse {
    'flow-ids'?: string[];
}

interface FlowDetailResponse {
    flow?: string;
}

interface Flow {
    id: string;
    [key: string]: any;
}

class TrustGraphClient {
    private url: string;
    private ws: WebSocket | null = null;
    private tag: string;
    private id: number = 1;
    private inflight: { [key: string]: InflightRequest } = {};

    constructor(url: string) {
        this.url = url.replace('http://', 'ws://').replace('https://', 'wss://');
        this.tag = makeid(16);
    }

    connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log('Connecting to TrustGraph at:', this.url);
            
            this.ws = new WebSocket(this.url);

            this.ws.on('open', () => {
                console.log('Connected to TrustGraph WebSocket');
                resolve();
            });

            this.ws.on('error', (error: Error) => {
                console.error('WebSocket error:', error);
                reject(error);
            });

            this.ws.on('message', (data: WebSocket.Data) => {
                try {
                    const message = JSON.parse(data.toString());
                    if (message.id && this.inflight[message.id]) {
                        const { resolve: resolveRequest, reject: rejectRequest } = this.inflight[message.id];
                        delete this.inflight[message.id];
                        
                        if (message.response) {
                            resolveRequest(message.response);
                        } else if (message.error) {
                            rejectRequest(new Error(message.error));
                        }
                    }
                } catch (error) {
                    console.error('Error parsing message:', error);
                }
            });

            this.ws.on('close', () => {
                console.log('WebSocket connection closed');
            });
        });
    }

    private getNextId(): string {
        const mid = this.tag + '-' + this.id.toString();
        this.id++;
        return mid;
    }

    private makeRequest<T>(service: string, request: object, timeout: number = 10000): Promise<T> {
        return new Promise((resolve, reject) => {
            if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
                reject(new Error('WebSocket not connected'));
                return;
            }

            const id = this.getNextId();
            const message = {
                id: id,
                service: service,
                request: request
            };

            // Set up timeout
            const timer = setTimeout(() => {
                if (this.inflight[id]) {
                    delete this.inflight[id];
                    reject(new Error('Request timeout'));
                }
            }, timeout);

            // Store the promise handlers with timeout cleanup
            this.inflight[id] = {
                resolve: (result: T) => {
                    clearTimeout(timer);
                    resolve(result);
                },
                reject: (error: Error) => {
                    clearTimeout(timer);
                    reject(error);
                }
            };

            // Send the message
            this.ws!.send(JSON.stringify(message));
        });
    }

    async getFlows(): Promise<string[]> {
        try {
            const response = await this.makeRequest<FlowResponse>('flow', {
                operation: 'list-flows'
            });
            return response['flow-ids'] || [];
        } catch (error) {
            console.error('Error getting flows:', error);
            throw error;
        }
    }

    async getFlowDetails(flowId: string): Promise<any> {
        try {
            const response = await this.makeRequest<FlowDetailResponse>('flow', {
                operation: 'get-flow',
                'flow-id': flowId
            });
            return JSON.parse(response.flow || '{}');
        } catch (error) {
            console.error(`Error getting flow details for ${flowId}:`, error);
            throw error;
        }
    }

    // Method that mirrors the logic from src/state/flows.ts:36-50
    async getFlowsWithDetails(): Promise<Flow[]> {
        try {
            // Get list of flow IDs (equivalent to socket.flows().getFlows())
            const flowIds = await this.getFlows();
            
            // Get details for each flow and combine with ID
            // (equivalent to Promise.all((flows || []).map((flowId) => ...)))
            const flows = await Promise.all(
                flowIds.map(async (flowId: string): Promise<Flow> => {
                    const flowDetails = await this.getFlowDetails(flowId);
                    return { ...flowDetails, id: flowId };
                })
            );
            
            return flows;
        } catch (error) {
            console.error('Error getting flows with details:', error);
            throw error;
        }
    }

    close(): void {
        if (this.ws) {
            this.ws.close();
        }
    }
}

// Main execution
async function main(): Promise<void> {
    const client = new TrustGraphClient(TRUSTGRAPH_URL);

    try {
        // Connect to TrustGraph
        await client.connect();

        // Get the list of running flows with details
        // This mirrors the logic from src/state/flows.ts
        console.log('\nFetching flows with details (using flows.ts pattern)...');
        const flowsWithDetails = await client.getFlowsWithDetails();
        
        if (flowsWithDetails.length === 0) {
            console.log('No running flows found.');
        } else {
            console.log(`Found ${flowsWithDetails.length} running flow(s):`);
            
            flowsWithDetails.forEach((flow, index) => {
                console.log(`\n--- Flow ${index + 1} ---`);
                console.log(`ID: ${flow.id}`);
                
                // Display other flow properties (excluding the ID we added)
                const { id, ...otherProps } = flow;
                if (Object.keys(otherProps).length > 0) {
                    console.log('Properties:', JSON.stringify(otherProps, null, 2));
                } else {
                    console.log('No additional properties');
                }
            });
        }

        // Also demonstrate the individual methods
        console.log('\n--- Alternative: Individual method calls ---');
        const flowIds = await client.getFlows();
        console.log(`Flow IDs: [${flowIds.join(', ')}]`);

    } catch (error) {
        if (error instanceof Error) {
            console.error('Error:', error.message);
        } else {
            console.error('Unknown error:', error);
        }
    } finally {
        client.close();
        console.log('\nConnection closed.');
    }
}

// Handle graceful shutdown
process.on('SIGINT', () => {
    console.log('\nReceived SIGINT, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGTERM', () => {
    console.log('\nReceived SIGTERM, shutting down gracefully...');
    process.exit(0);
});

// Run the example
main().catch(console.error);