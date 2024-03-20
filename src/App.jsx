// importacion por defecto
// import Navbar from "./componentes/Nabvar.jsx"

// importacion nombrada

import Footer from "./componentes/Footer.jsx";
import Home from "./componentes/Home.jsx";
import { Navbar } from "./componentes/Nabvar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
