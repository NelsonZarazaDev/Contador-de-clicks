import "./App.css";
import Boton from "./component/Boton";
import logo from "./img/freecodecamp-logo.png";
import Contador from "./component/Contador"
import { useState } from "react";

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics+1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={logo}
          alt="lofo de freeCodeCamp"
        />
      </div>

      <div className="contenedor-principal">
        <Contador numClics={numClics}/>
        <Boton texto={'Clic'} botonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto={'Reiniciar'}
          botonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
