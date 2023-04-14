import "../assets/css/paisGrupo.css";
import { Link } from "react-router-dom";

function PaisGrupo(props) {
  var paises = require("../assets/images/" + props.name + ".png");
  return (
    <div className="pais-grupo-div">
      <Link className="link-country" to={props.name}>
        <img className="country-img" src={paises} alt={props.name} />
        <h3 className="country-name">{props.name}</h3>
      </Link>
    </div>
  );
}

export default PaisGrupo;
