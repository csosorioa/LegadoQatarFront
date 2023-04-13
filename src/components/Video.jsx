import '../assets/css/video.css'

function Home() {
    return(
        <div className="video-div">
            <video width="560" height="315" typeof="video/mp4" controls>
                <source src="http://localhost:5000/" type='video/mp4'/>
            </video>
        </div>
    );
}

export default Home;