import '../assets/css/articulo.css';
import Carta from "./Carta";

function Articulo(props) {
    console.log(props.articles);
    
    console.log(props.image);
    const articles = props.articles;
    return(
        <div className="articulo-div">
            <h1 className='h-title' id='id-title'>Mis artículos</h1>
            <div className="card-div">
                <div className='row'>
                {articles.map((art)=>{
                    return(
                    <div className='col-lg-4 columna'>
                    <Carta 
                    key={art.id}
                    title={art.title}
                    content={art.content}
                    image={require("../assets/images/"+art.image)}
                    ruta={art.ruta}
                    
                    />
                    </div>);
                })}
                </div>
            </div>
        </div>
    );
}

export default Articulo;