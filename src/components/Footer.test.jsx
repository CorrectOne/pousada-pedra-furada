import { render, screen } from "@testing-library/react"; 
import Footer from "./Footer";
describe("Footer", () => { 
 test("deve exibir o texto de direitos autorais", () => { 
 render(<Footer />); 
 expect( 
 screen.getByText("© 2025 Pousada Pedra Furada") 
 ).toBeInTheDocument(); 
 }); 
}); 
