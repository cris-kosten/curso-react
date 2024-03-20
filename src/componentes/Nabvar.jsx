

// 2 formas de exportar  archivos o componentes 
// const Navbar = ()=>{

//     return <h1>Good Morning</h1>
// }

//export default Navbar

//  ejemplo : import titleNavbar from "./componentes/Nabvar.jsx"



// exportacion  nombrada  ( sin restriccion - pueden haber varias exportaciones)

import "../styles/Navbar.css"

export const Navbar = () => {

    return (
        <div className="container">
            <h2>Navbar</h2>
            <ul>
                <li>Inicio</li>
                <li>Cursos</li>
                <li>Contacto</li>
            </ul>
        </div>
    );
};



