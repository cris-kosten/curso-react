
// las props llegan siempre como un objeto
export const ProductCard = (props) => {
    // desestructuramos con props 
    const { titulo, descripcion, precio } = props
    return (
        <div>
            <div>
                <h3>{titulo} </h3>
                <h4>{descripcion} </h4>
                <h3>{precio} </h3>
            </div>
        </div>
    )
}

export default ProductCard


