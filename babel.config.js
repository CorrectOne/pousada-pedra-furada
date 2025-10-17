module.exports = { 
  presets: [ 
    [ 
      "@babel/preset-react", 
      { runtime: "automatic" } //  ativa o JSX transform moderno 
    ], 
    "next/babel" 
  ] 
}; 