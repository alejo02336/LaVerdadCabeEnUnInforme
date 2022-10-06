import "./App.css";
import Video from "./pages/Video";
import { Boton } from "./pages/Boton";
import { BotonesFinal } from "./pages/BotonesFinal";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Boton />} />
      <Route path="experiencia" element={<Video />} />
      <Route path="final" element={<BotonesFinal />} />
    </Routes>
  );
}

export default App;
