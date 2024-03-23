import { useState } from "react";
import { Counter } from "./components/common/counter/Counter";

import { Footer } from "./components/layout/footer/Footer";

import { Navbar } from "./components/layout/navbar/Navbar";

import ItemListContainer from "./components/pages/itemLIstContainer/ItemListContainer";



function App() {

  // name  ---> cristian
  //name  ----> hugo

  const [name, setName] = useState("cristian")

  // creamos la funcion para cambiar el nombre
  // const cambiarNombre = (nuevoNombre) => {
  //   setName(nuevoNombre);
  // };


  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />

      <Counter />


      <h2>{name}</h2>
      {/* opcion 01 -- comun que no recibe parametros */}
      {/* <button onClick={cambiarNombre}>Cambiar nombre</button>  */}

      {/* opcion 02 -creando una funcion dentro de un colvack */}
      {/* <button onClick={() => { cambiarNombre("Chuquito") }}>Cambiar nombre</button>
      */}

      {/* Opcion 3 recomendable */}
      <button onClick={() => setName("Huguito")}>Cambiar name</button>
    </div>
  );

}

export default App;