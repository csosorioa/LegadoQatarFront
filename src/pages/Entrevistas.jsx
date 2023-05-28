import '../assets/css/entrevistas.css'

function Entrevistas() {
    return(
        <div className='videos'>
            <div className='videos'>
            <h1>La nueva era del fútbol basado en Data</h1>
            <h2 className='x p'>Bastien Rodríguez</h2>
            <p className='description'>Analista Táctico y videoanalista graduado de la Federación Francesa de fútbol.<br/>Ha trabajado en los clubes colombianos: América de Cali y Junior de Barranquilla.<br/>Actualmente, se encuentra en el fútbol mexicano, con el equipo Tigres de Monterrey.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/j70vIo_xpk0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='videos'>
            <h2 className='x p'>Luis Fernando Suárez</h2>
            <p className='description'>Luis Fernando Suárez: Director técnico de Costa Rica con un amplio recorrido en fútbol a nivel de selecciones, dirigiendo el equipo nacional de Mayores de Ecuador, Honduras y Costa Rica.<br/>Es el técnico colombiano con más victorias en una Copa del Mundo ( 3 triunfos).</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-J55uWz8uoI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Entrevistas;