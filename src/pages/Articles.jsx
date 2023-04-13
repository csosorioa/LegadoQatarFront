import { useEffect, useState } from "react";
import Articulo from "../components/Articulo";
import '../assets/css/articles.css'    

function Articles() {
    const [backendData, setBackendData] = useState([{}]);
    useEffect(() => {
        fetch("http://localhost:5000/articles").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data);
            }
        )
    }, [])
    return (
        <div className="articles-div">
            {(typeof backendData.articles === 'undefined') ? (
                <></> 
            ): (
                <Articulo articles={backendData.articles} />
            )}
        </div>
    )
}

export default Articles;