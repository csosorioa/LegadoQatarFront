import Jugador from "./Jugador";

function Defensas(props) {
  return (
    <div className="row">
      {props.defensas.map((player) => {
        return (
          <div className="col-lg-4">
            <Jugador
              key={player.id}
              id={player.id}
              apellido={player.apellido}
              nombre={player.nombre}
              image={player.imagen}
              position="Defensa"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Defensas;