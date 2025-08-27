import "@testing-library/jest-dom";
import { vi, beforeEach } from "vitest";
import type { MockedObject } from "vitest";

// Mock WebSocket globally
global.WebSocket = vi.fn(() => ({
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  send: vi.fn(),
  close: vi.fn(),
  readyState: 1,
})) as MockedObject<WebSocket>;

// Mock ResizeObserver
global.ResizeObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock window.location
Object.defineProperty(window, "location", {
  value: {
    href: "http://localhost:3000",
    origin: "http://localhost:3000",
    pathname: "/",
    search: "",
    hash: "",
  },
  writable: true,
});

// Set up DOM for Portal components globally (UI-agnostic)
// Create generic portal containers that persist across tests
const setupPortalContainers = () => {
  // Generic portal root that any UI framework can use
  if (!document.getElementById("portal-root")) {
    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "portal-root");
    document.body.appendChild(portalRoot);
  }

  // Additional portal container for modals/dialogs
  if (!document.getElementById("modal-root")) {
    const modalRoot = document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(modalRoot);
  }
};

// Set up portals immediately when setup runs
setupPortalContainers();

beforeEach(() => {
  // Clean portal containers but keep them available
  const portalRoot = document.getElementById("portal-root");
  if (portalRoot) {
    portalRoot.innerHTML = "";
  }

  const modalRoot = document.getElementById("modal-root");
  if (modalRoot) {
    modalRoot.innerHTML = "";
  }

  // Recreate if they were removed
  setupPortalContainers();
});
