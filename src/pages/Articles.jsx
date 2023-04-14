import Articulo from "../components/Articulo";
import '../assets/css/articles.css'  
import articles from "../assets/json/articles.js";  

function Articles() {

    return (
        <div className="articles-div">
            {(typeof articles === 'undefined') ? (
                <></> 
            ): (
                <Articulo articles={articles} />
            )}
        </div>
    )
}

export default Articles;