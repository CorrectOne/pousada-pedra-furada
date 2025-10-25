import React from "react"; 
import { Link } from "react-router-dom"; 
export default function Header() { 
 return ( 
 <header 
 style={{ 
 background: "#234", 
 color: "#fff", 
 padding: "1rem", 
 display: "flex", 
 justifyContent: "space-between", 
 }} 
 > 
 <h1>Pousada Pedra Furada</h1> 
 <nav> 
 <Link to="/login" style={{ color: "#fff", marginRight: "1rem" 
}}>Login</Link> 
 <Link to="/tarefas" style={{ color: "#fff", marginRight: "1rem" 
}}>Tarefas</Link> 
 <Link to="/relatorios" style={{ color: "#fff" }}>Relatórios</Link> 
 </nav> 
 </header> 
 ); 
}