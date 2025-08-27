import { create } from "zustand";

/**
 * State interface for managing document loading and upload operations
 * Handles file uploads, text input, metadata, and processing operations
 * @public
 */
export interface LoadState {
  /** Document title/name */
  title: string;
  /** Additional comments or description */
  comments: string;
  /** Source URL (for web-based content) */
  url: string;
  /** Keywords/tags associated with the document */
  keywords: string[];

  /** Type of operation (e.g., "upload-pdf", "upload-text") */
  operation: string;

  /** Files selected for upload */
  files: File[];
  /** List of successfully uploaded file names */
  uploaded: string[];
  /** Direct text input content */
  text: string;

  /** Update document title */
  setTitle: (v: string) => void;
  /** Update document comments */
  setComments: (v: string) => void;
  /** Update document URL */
  setUrl: (v: string) => void;
  /** Update document keywords */
  setKeywords: (v: string[]) => void;

  /** Update processing operation type */
  setOperation: (v: string) => void;

  /** Update selected files */
  setFiles: (v: File[]) => void;
  /** Update uploaded files list */
  setUploaded: (v: string[]) => void;
  /** Update text content */
  setText: (v: string) => void;
  /** Add a single uploaded file to the list */
  addUploaded: (v: string) => void;
  /** Remove a file from the selection */
  removeFile: (v: File) => void;

  /** Counter for text-based uploads */
  textUploads: number;
  /** Update text upload counter */
  setTextUploads: (v: number) => void;
  /** Increment the text upload counter */
  incTextUploads: () => void;
}

/**
 * Zustand store for managing document loading state
 * Provides centralized state management for the document upload/loading workflow
 * @public
 */
export const useLoadStateStore = create<LoadState>()((set) => ({
  // Initial state values
  title: "", // Empty title by default
  comments: "", // Empty comments by default
  url: "", // Empty URL by default
  keywords: [], // No keywords by default
  operation: "upload-pdf", // Default operation is PDF upload
  files: [], // No files selected by default
  uploaded: [], // No files uploaded yet
  text: "", // Empty text content by default

  // Setter functions for document metadata
  setTitle: (v) =>
    set(() => ({
      title: v,
    })),

  setComments: (v) =>
    set(() => ({
      comments: v,
    })),

  setUrl: (v) =>
    set(() => ({
      url: v,
    })),

  setKeywords: (v) =>
    set(() => ({
      keywords: v,
    })),

  // Setter function for processing operation type
  setOperation: (v) =>
    set(() => ({
      operation: v,
    })),

  // Setter functions for file management
  setFiles: (v) =>
    set(() => ({
      files: v,
    })),

  setUploaded: (v) =>
    set(() => ({
      uploaded: v,
    })),

  // Add a single file to the uploaded list (preserving existing uploads)
  addUploaded: (v) =>
    set((state) => ({
      uploaded: [...state.uploaded, v],
    })),

  setText: (v) =>
    set(() => ({
      text: v,
    })),

  // Remove a specific file from the selected files list
  removeFile: (v) =>
    set((state) => ({
      files: Array.from(state.files).filter((f) => f != v),
    })),

  // Text upload counter management
  textUploads: 0, // Initial counter value
  setTextUploads: (v) =>
    set(() => ({
      textUploads: v,
    })),
  // Increment the text upload counter (useful for generating unique IDs)
  incTextUploads: () =>
    set((state) => ({
      textUploads: state.textUploads + 1,
    })),
}));
