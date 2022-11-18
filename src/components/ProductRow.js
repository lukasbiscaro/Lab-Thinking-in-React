const ProductRow = ({ products }) => {
    return (
        <tbody>
            {products.map((eachProduct) => {
                return (
                    <tr key={eachProduct.id}>
                        <td style={{ color: (eachProduct.inStock ? 'black' : 'red') }}>{eachProduct.name}</td>
                        <td>{eachProduct.price}</td>
                    </tr>
                )
            })}
        </tbody>
    )
}

export default ProductRow