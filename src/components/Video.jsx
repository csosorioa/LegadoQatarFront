import '../assets/css/video.css'
import video from '../assets/videos/fifa_final.mp4';

function Home() {
    return(
        <div className="video-div">
            <video width="560" height="315" typeof="video/mp4" autoPlay='' controls>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    );
}

export default Home;