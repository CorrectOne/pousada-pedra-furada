// Habilita as matchers do Testing Library (como toBeInTheDocument)
import "@testing-library/jest-dom";

// Silencia o aviso do React sobre JSX antigo
const originalWarn = console.warn;
console.warn = (...args) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("using an outdated JSX transform")
  ) {
    return;
  }
  originalWarn(...args);
};

// Adiciona suporte global a TextEncoder/TextDecoder (necessário pro React Router)
import { TextEncoder, TextDecoder } from "util";

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}
