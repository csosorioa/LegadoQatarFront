import { Link } from "react-router-dom";
import "../assets/css/jugador.css";

function Jugador(props) {
  const ruta = props.apellido + "-" + props.id;
  const route = "http://localhost:5000/images/" + ruta + ".webp";
  console.log(props.apellido);
  return (
    <div className="jugador-div">
      <Link className="player-link" to={ruta}>
        <img className="player-img" src={route} alt="jugador" />
        {typeof props.nombre === "undefined" ? (
          <h5 style={{ visibility: "hidden" }}>null</h5>
        ) : (
          <h5>{props.nombre}</h5>
        )}
        <h2>{props.apellido}</h2>
        <hr />
        <h6>{props.position}</h6>
      </Link>
    </div>
  );
}

export default Jugador;
