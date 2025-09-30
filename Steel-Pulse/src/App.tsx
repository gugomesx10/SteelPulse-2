import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Rodape from "./components/Rodape/Rodape";
import Navbar from "./components/Navbar/Navbar";

export default function App(){

  return(
    <div className="container">
        <Cabecalho/>
        <Navbar />
        <Outlet/>
        <Rodape/>
    </div>
  );
}