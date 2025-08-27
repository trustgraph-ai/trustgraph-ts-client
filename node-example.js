#!/usr/bin/env node

const WebSocket = require('ws');

// Configuration
const TRUSTGRAPH_URL = 'http://localhost:8888/api/socket';

// Simple ID generator
function makeid(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

class TrustGraphClient {
    constructor(url) {
        this.url = url.replace('http://', 'ws://').replace('https://', 'wss://');
        this.ws = null;
        this.tag = makeid(16);
        this.id = 1;
        this.inflight = {};
    }

    connect() {
        return new Promise((resolve, reject) => {
            console.log('Connecting to TrustGraph at:', this.url);
            
            this.ws = new WebSocket(this.url);

            this.ws.on('open', () => {
                console.log('Connected to TrustGraph WebSocket');
                resolve();
            });

            this.ws.on('error', (error) => {
                console.error('WebSocket error:', error);
                reject(error);
            });

            this.ws.on('message', (data) => {
                try {
                    const message = JSON.parse(data);
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

    getNextId() {
        const mid = this.tag + '-' + this.id.toString();
        this.id++;
        return mid;
    }

    makeRequest(service, request, timeout = 10000) {
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

            // Store the promise handlers
            this.inflight[id] = { resolve, reject };

            // Set up timeout
            const timer = setTimeout(() => {
                if (this.inflight[id]) {
                    delete this.inflight[id];
                    reject(new Error('Request timeout'));
                }
            }, timeout);

            // Override resolve to clear timeout
            const originalResolve = resolve;
            this.inflight[id].resolve = (result) => {
                clearTimeout(timer);
                originalResolve(result);
            };

            // Override reject to clear timeout
            const originalReject = reject;
            this.inflight[id].reject = (error) => {
                clearTimeout(timer);
                originalReject(error);
            };

            // Send the message
            this.ws.send(JSON.stringify(message));
        });
    }

    async getFlows() {
        try {
            const response = await this.makeRequest('flow', {
                operation: 'list-flows'
            });
            return response['flow-ids'] || [];
        } catch (error) {
            console.error('Error getting flows:', error);
            throw error;
        }
    }

    async getFlowDetails(flowId) {
        try {
            const response = await this.makeRequest('flow', {
                operation: 'get-flow',
                'flow-id': flowId
            });
            return JSON.parse(response.flow || '{}');
        } catch (error) {
            console.error(`Error getting flow details for ${flowId}:`, error);
            throw error;
        }
    }

    close() {
        if (this.ws) {
            this.ws.close();
        }
    }
}

// Main execution
async function main() {
    const client = new TrustGraphClient(TRUSTGRAPH_URL);

    try {
        // Connect to TrustGraph
        await client.connect();

        // Get the list of running flows
        console.log('\nFetching list of running flows...');
        const flows = await client.getFlows();
        
        if (flows.length === 0) {
            console.log('No running flows found.');
        } else {
            console.log(`Found ${flows.length} running flow(s):`);
            
            // Get details for each flow
            for (const flowId of flows) {
                try {
                    console.log(`\nFlow ID: ${flowId}`);
                    const flowDetails = await client.getFlowDetails(flowId);
                    console.log('Flow Details:', JSON.stringify(flowDetails, null, 2));
                } catch (error) {
                    console.log(`  Error getting details: ${error.message}`);
                }
            }
        }

    } catch (error) {
        console.error('Error:', error.message);
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