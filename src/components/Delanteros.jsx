import Jugador from "./Jugador";

function Delanteros(props) {
  return (
    <div className="row">
      {props.delanteros.map((player) => {
        return (
          <div className="col-lg-4">
            <Jugador
              key={player.id}
              id={player.id}
              apellido={player.apellido}
              nombre={player.nombre}
              image={player.imagen}
              position="Delantero"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Delanteros;