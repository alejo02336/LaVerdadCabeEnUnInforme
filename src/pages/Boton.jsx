import React from "react";
import "./Boton.css";
import { useNavigate } from "react-router-dom";

export const Boton = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1
        style={{
          margin: 0,
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "50px",
        }}
      >
        ¿La verdad cabe en un informe?
      </h1>
      <div className="contenedor-centrado">
        <div class="btn-group-vertical">
          <a onClick={() => navigate("experiencia")} class="btn btn-default">
            Iniciar
          </a>
          <a href="#" class="btn btn-default">
            Mas Informacion
          </a>
          <a href="#" class="btn btn-default">
            Instrucciones
          </a>
          <a href="#" class="btn btn-default">
            Creditos
          </a>
        </div>
      </div>
    </>
  );
};
