import Grupo from "../components/Grupo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/teams.css";
import { useState, useEffect } from "react";

function Teams() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("http://localhost:5000/teams")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="teams-div">
      {typeof backendData.paises === "undefined" ? (
        <></>
      ) : (
        <Carousel responsive={responsive}>
          {backendData.paises.map((i, index) => {
            return (
              <Grupo key={index} group={i.group} countries={i.countries} />
            );
          })}
        </Carousel>
      )}
    </div>
  );
}

export default Teams;
