import { Badge, Button, TextField } from "@mui/material"
import { useState } from "react"
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';



const PruebaComponentes = () => {

    const [mostrar, setMostrar] = useState(false)


    return (
        <div style={{ padding: "50px" }}>
            <form action="">
                <TextField label="Usuario" variant="outlined" color="secondary" />


                <TextField label="Password" variant="outlined" color="secondary" type={mostrar ? "text" : "password"} />

                <button onClick={() => setMostrar(!mostrar)}>ver / ocultar</button>

                <TextField label="email" variant="outlined" color="secondary" type="email" />

                <Button variant="contained" color="secondary">Enviar</Button>
            </form>
            <Badge badgeContent={0} color="primary" showZero={true} >
                <ShoppingCartSharpIcon color="secondary" />
            </Badge>

            {/* <Button variant="outlined" color="secondary">Contained</Button> */}
        </div>
    )
}

export default PruebaComponentes