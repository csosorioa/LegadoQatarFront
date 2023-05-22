import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./pages/Articles";
import Teams from "./pages/Teams";
import Equipo from "./pages/Equipo";
import Player from "./pages/Player";
import Entrevistas from "./pages/Entrevistas";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/LegadoQatarFront" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/interviews" element={<Entrevistas />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:team" element={<Equipo />} />
          <Route path="/teams/:team/:playerId" element={<Player />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
