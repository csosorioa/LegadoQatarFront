import { useLocation } from "react-router-dom";
import "../assets/css/player.css";
import players from '../assets/json/players/prueba.js'

function Player(props) {
  const locations = useLocation().pathname.split("/");
  var code = locations[locations.length - 1];
  var flag = locations[locations.length - 2];
  var id = code.split("-")[1];
  console.log(id);
  // eslint-disable-next-line eqeqeq
  var jugador = players.find(x => x.id==id);
  console.log(players);
  console.log(jugador);
  const route =
    require("../assets/images/" + locations[locations.length - 1] + ".webp");
  const logo = require("../assets/images/" + flag + ".png")
  return (
    <div>
    {typeof jugador.name === "undefined" ? (
        <></>
      ) :(
    <div className="div-player-detail">
      <div className="player-img-div">
        <img className="player-info-img" src={route} alt="img jugador" />
        <img
            className="flag-img-info"
            src={
              logo
            }
            alt="country flag"
          />
      </div>
      <div className="player-info-div">
        <h1>{jugador.name}</h1>
        <div>
          
          <h2>{jugador.team}</h2>
        </div>
        <h2>{jugador.position}</h2>
        <h3>También juega para {jugador.otherTeam}</h3>
        <p>Nació el {jugador.birthday}</p>
        <p>Nació en {jugador.birthplace}</p>
        <p>- {jugador.factOne}</p>
        <p>- {jugador.factTwo}</p>
        <p>{jugador.history}</p>
      </div>
    </div>)}
    </div>
  );
}

export default Player;
