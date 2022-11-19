const ProductRow = ({ products }) => {

    return (
        <tbody>
            <tr key={products.id}>
                <td style={{ color: (products.inStock ? 'black' : 'red') }}>{products.name}</td>
                <td>{products.price}</td>
            </tr>
        </tbody>
    )
}

export default ProductRow