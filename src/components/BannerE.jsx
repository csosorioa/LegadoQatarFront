import "../assets/css/bannere.css";

function BannerE(props) {
  var name = props.name;
  var flag = require("../assets/images/"+ name + ".png")
  if(name === "Corea del Sur") {
    name = "C Sur";
  }
  if(name === "Costa Rica") {
    name = "C Rica";
  }
  if(name === "Arabia Saudita") {
    name = "A Saudita";
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:props.color}}>
      <div className="container-fluid" style={{backgroundColor:props.color, color:"#FFFF"}}>
        <div className="logo-img-div">
        <img
          className="flag-img"
          src={ flag}
          alt="flag"
        />
        <h1 className="name-h1" style={{color:"#ffff"}}>{props.name}</h1>
        </div>
        <div className="navega" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" href="#arqueros" style={{color:"#ffff"}}>
              Arqueros
            </a>
            <a className="nav-link" href="#defensas" style={{color:"#ffff"}}>
              Defensas
            </a>
            <a className="nav-link" href="#mediocamp" style={{color:"#ffff"}}>
              Mediocampistas
            </a>
            <a className="nav-link" href="#delanteros" style={{color:"#ffff"}}>
              Delanteros
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BannerE;
