import Jugador from "./Jugador";

function Mediocampistas(props) {
  return (
    <div className="row">
      {props.mediocampistas.map((player) => {
        return (
          <div className="col-lg-4">
            <Jugador
              key={player.id}
              id={player.id}
              apellido={player.apellido}
              nombre={player.nombre}
              image={player.imagen}
              position="Mediocampista"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Mediocampistas;