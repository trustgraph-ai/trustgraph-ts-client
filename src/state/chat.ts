import { create } from "zustand";
import { Message } from "../model/message";

/**
 * Chat mode types for different conversation styles
 * @public
 */
export type ChatMode = "graph-rag" | "agent" | "basic-llm";

/**
 * State interface for chat management
 * @public
 */
export interface ChatState {
  /** Array of chat messages */
  messages: Message[];
  /** Current user input text */
  input: string;
  /** Current chat mode */
  chatMode: ChatMode;

  /** Update the entire messages array */
  setMessages: (v: Message[]) => void;
  /** Add a new message to the chat history */
  addMessage: (
    role: string,
    text: string,
    type?: "normal" | "thinking" | "observation" | "answer",
  ) => void;
  /** Update the current user input */
  setInput: (v: string) => void;
  /** Change the current chat mode */
  setChatMode: (mode: ChatMode) => void;
}

/**
 * Zustand store for chat state management
 * Provides methods for managing chat messages, user input, and chat modes
 * @public
 */
export const useChatStateStore = create<ChatState>()((set) => ({
  messages: [
    {
      role: "ai",
      text: "Welcome to the TrustGraph Test Suite. Use the chat interface to perform Graph RAG requests.",
    },
  ],

  input: "",
  chatMode: "graph-rag",

  setMessages: (v) =>
    set(() => ({
      messages: v,
    })),

  addMessage: (
    role: string,
    text: string,
    type?: "normal" | "thinking" | "observation" | "answer",
  ) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          role: role,
          text: text,
          type: type || "normal",
        },
      ],
    })),

  setInput: (v) =>
    set(() => ({
      input: v,
    })),

  setChatMode: (mode: ChatMode) =>
    set(() => ({
      chatMode: mode,
    })),
}));
