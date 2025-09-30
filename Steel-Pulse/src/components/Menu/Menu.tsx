import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/consultas">Consultas</Link> | 
      <Link to="/perfil">Perfil</Link> | 
      <Link to="/saude">Saúde Digital</Link>
    </nav>
  );
}
