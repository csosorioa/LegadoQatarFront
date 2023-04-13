import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/player.css";

function Player(props) {
  const locations = useLocation().pathname.split("/");
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch(
      "http://localhost:5000/teams/" +
        locations[locations.length - 2] +
        "/" +
        locations[locations.length - 1]
    )
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(backendData);
  const route =
    "http://localhost:5000/images/" + locations[locations.length - 1] + ".webp";
  return (
    <div>
      {typeof backendData.name === "undefined" ? (
        <></>
      ) :(
    <div className="div-player-detail">
      <div className="player-img-div">
        <img className="player-info-img" src={route} alt="img jugador" />
        <img
            className="flag-img-info"
            src={
              "http://localhost:5000/images/" +
              backendData.country.toUpperCase() +
              ".png"
            }
            alt="country flag"
          />
      </div>
      <div className="player-info-div">
        <h1>{backendData.name}</h1>
        <div>
          
          <h2>{backendData.team}</h2>
        </div>
        <h2>{backendData.position}</h2>
        <h3>También juega para {backendData.otherTeam}</h3>
        <p>Nació el {backendData.birthday}</p>
        <p>Nació en {backendData.birthplace}</p>
        <p>- {backendData.factOne}</p>
        <p>- {backendData.factTwo}</p>
        <p>{backendData.history}</p>
      </div>
    </div>)}
    </div>
  );
}

export default Player;
