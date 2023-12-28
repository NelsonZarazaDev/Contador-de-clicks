import React from "react";
import "../css/Boton.css"

function Boton({ texto, botonDeClic, manejarClic }) {
  return (
    //Si botonDeClic "?" es boton-clic ejecuta algo de lo contrario ":" es un boton de reinicio
    <button className={botonDeClic ? "boton-clic" : "boton-reinicio"} onClick={manejarClic}>
      {texto}
    </button>
  );
}

//Con default solo se esporta una
export default Boton;