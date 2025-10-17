require("@testing-library/jest-dom");

// jest.setup.js 
require("@testing-library/jest-dom"); 
 
//  Silencia o warning do React sobre JSX transform antigo 
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

/** @type {import('jest').Config} */ 
const config = { 
testEnvironment: "jsdom", 
setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], 
moduleNameMapper: { 
// ignora importações de CSS, imagens etc. durante o teste 
"\\.(css|less|scss|sass)$": "identity-obj-proxy", 
"\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", 
}, 
testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"], 
transform: { 
"^.+\\.(js|jsx|ts|tsx)$": "babel-jest", 
}, 
}; 
module.exports = config; 