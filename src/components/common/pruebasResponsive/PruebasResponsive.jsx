import { Grid, Typography } from "@mui/material"
import { caja2 } from "../../../styles"

//  descargar el material de ui cada vez q iniciamos un proyecto de 0
// https://mui.com/material-ui/react-grid/

// Le damos un style al container por fuera del codigo 
// let caja2 = { backgroundColor: "green", padding: { xs: "20px", sm: "120px" } } (probamos exportando desde un arc js)

export const PruebasResponsive = () => {
    return (
        <div>
            <Grid container >
                <Grid item xs={12} sm={6} md={4} >

                    <Typography align="center" color={"primary.alternativo"}>Reloj Longuines 01</Typography >
                </Grid>

                <Grid item sx={caja2} xs={12} sm={6} md={4}>

                    <Typography align="center" color={"primary.alternativo"}>Reloj Longuines 02</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>

                    <Typography align="center" color={"primary.alternativo"}>Reloj Longuines 03</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default PruebasResponsive