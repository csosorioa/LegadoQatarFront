import Grupo from "../components/Grupo";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/teams.css";
import paises from "../assets/json/paises.js"

function Teams() {
  console.log(paises);
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
      {typeof paises === "undefined" ? (
        <></>
      ) : (
        <Carousel responsive={responsive}>
          {paises.map((i, index) => {
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
