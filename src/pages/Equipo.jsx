import { useLocation } from "react-router-dom";
import Arqueros from "../components/Arqueros";
import BannerE from "../components/BannerE";
import Defensas from "../components/Defensas";
import Delanteros from "../components/Delanteros";
import Mediocampistas from "../components/Mediocampistas";
import '../assets/css/equipo.css';



function Equipo() {
  const location = useLocation().pathname.split("/");
  var pais = require("../assets/json/"+ location[location.length - 1]).default
  console.log("esto" + pais);
  return (
    <div>
      {typeof pais === "undefined" ? (
        <></>
      ) : (
        <div className="container text-center">
          <BannerE color={pais.color} name={pais.name}/>
          <div className="row">
            <h1 className="h-titulo" id="arqueros">Arqueros</h1>
            <Arqueros arqueros={pais.arqueros} />
          </div>
          <div className="row">
            <h1 className="h-titulo" id="defensas">Defensas</h1>
            <Defensas defensas={pais.defensas} />
          </div>
          <div className="row">
            <h1 className="h-titulo" id="mediocamp">Mediocampistas</h1>
            <Mediocampistas mediocampistas={pais.mediocampistas} />
          </div>
          <div className="row">
            <h1 className="h-titulo" id="delanteros">Delanteros</h1>
            <Delanteros delanteros={pais.delanteros} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Equipo;
