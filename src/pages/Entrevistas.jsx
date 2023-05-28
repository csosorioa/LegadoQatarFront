import '../assets/css/entrevistas.css'

function Entrevistas() {
    return(
        <div className='videos'>
            <div className='videos'>
            <h2 className='x p'>Bastien Rodríguez</h2>
            <p className='description'>Analista Táctico y videoanalista graduado de la Federación Francesa de fútbol.<br/>Ha trabajado en los clubes colombianos: América de Cali y Junior de Barranquilla.<br/>Actualmente, se encuentra en el fútbol mexicano, con el equipo Tigres de Monterrey.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/j70vIo_xpk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='videos'>
            <h2 className='x p'>Luis Fernando Suárez</h2>
            <p className='description'>Ismael Gómez Schmidt, analista de datos de fútbol, experto en Google Analytics, R Studio. Instructor de la Pizarra del DT</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-J55uWz8uoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Entrevistas;