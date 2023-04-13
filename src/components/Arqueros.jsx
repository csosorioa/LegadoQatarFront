import Jugador from "./Jugador";

function Arqueros(props) {
  return (
    <div className="row">
      {props.arqueros.map((player) => {
        return (
          <div className="col-lg-4">
            <Jugador
              key={player.id}
              id={player.id}
              apellido={player.apellido}
              nombre={player.nombre}
              image={player.imagen}
              position="Arquero"
            />
          </div>
        );
      })}
    </div>
  );
}

export default Arqueros;