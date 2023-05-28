import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import "../assets/css/carta.css";

function Carta(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, width: 300, height: 330 }} className="card">
        <CardActionArea className="card-content">
          <a href={props.ruta} target="_blank" rel="noreferrer">
            <CardMedia
              sx={{ height: 160 }}
              component="img"
              height="100%"
              image={props.image}
              alt="image"
            />

            <CardContent>
              <h3 className="textoArt">{props.title}</h3>
              <p className="textoArt">{props.content}</p>
            </CardContent>
          </a>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Carta;
