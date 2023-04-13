import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Arqueros from "../components/Arqueros";
import BannerE from "../components/BannerE";
import Defensas from "../components/Defensas";
import Delanteros from "../components/Delanteros";
import Mediocampistas from "../components/Mediocampistas";
import '../assets/css/equipo.css';

function Equipo() {
  const location = useLocation().pathname.split("/");
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:5000/teams/" + location[location.length - 1])
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(backendData);
  return (
    <div>
      {typeof backendData.pais === "undefined" ? (
        <></>
      ) : (
        <div className="container text-center">
          <BannerE color={backendData.pais.color} name={backendData.pais.name}/>
          <div className="row">
            <h1 className="h-titulo" id="arqueros">Arqueros</h1>
            <Arqueros arqueros={backendData.pais.arqueros} />
          </div>
          <div className="row">
            <h1 className="h-titulo" id="defensas">Defensas</h1>
            <Defensas defensas={backendData.pais.defensas} />
          </div>
          <div className="row">
            <h1 className="h-titulo" id="mediocamp">Mediocampistas</h1>
            <Mediocampistas mediocampistas={backendData.pais.mediocampistas} />
          </div>
          <div className="row">
            <h1 className="h-titulo" id="delanteros">Delanteros</h1>
            <Delanteros delanteros={backendData.pais.delanteros} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Equipo;
