import ProductRow from "./ProductRow"

const ProductTable = ({ products }) => {

    return (
        <div className="conteiner">
            <table>
                <thead>
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                {products.map(eachRow => {
                    return (
                        <ProductRow products={eachRow} />
                    )
                })}
            </table>
        </div>
    )
}

export default ProductTable