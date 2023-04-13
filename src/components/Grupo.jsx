import PaisGrupo from "./PaisGrupo";
import "../assets/css/grupo.css";

function Grupo(props) {
  let paises = props.countries;
  return (
    <div className="grupo-div">
      <h2 className="group-name">{props.group}</h2>
      <table>
        {paises.map((country, index) => {
          return (
            <tr>
              <td>
                <PaisGrupo key={index} name={country} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Grupo;
