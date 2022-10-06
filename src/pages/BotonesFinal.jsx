import React from "react";
import "./Boton.css";
import { useNavigate } from "react-router-dom";
export const BotonesFinal = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1
        style={{
          margin: 0,
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        Te gusto la experiencia? Comparte con tus amigos!
      </h1>

      <div className="contenedor-centrado">
        <div class="btn-group-vertical">
          <a href="#" class="btn btn-default">
            Compartir!
          </a>
          <a href="#" class="btn btn-default">
            Creditos
          </a>
          <a href="#" class="btn btn-default">
            Mas Informacion
          </a>
          <a onClick={() => navigate("/")} class="btn btn-default">
            Volver al Inicio
          </a>
        </div>
      </div>
    </div>
  );
};
