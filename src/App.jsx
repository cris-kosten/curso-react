import { PruebasResponsive } from "./components/common/pruebasResponsive/PruebasResponsive";

import { ThemeProvider } from "@emotion/react";
import PruebaComponentes from "./components/common/pruebaComponentes/PruebaComponentes";
import { themaClaro } from "./components/pages/configuracion";



function App() {

  return (
    <ThemeProvider theme={themaClaro}>

      <div>
        <PruebasResponsive />
        <PruebaComponentes />

      </div>
    </ThemeProvider>

  );

}

export default App;