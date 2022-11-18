import ProductRow from "./ProductRow"

const ProductTable = ({ products }) => {

    return (
        <div className="conteiner">
            <table className="table">
                <thead className="table-header">
                    <th>Name</th>
                    <th>Price</th>
                </thead>
                <ProductRow products={products} className="table-info" />
            </table>
        </div>
    )
}

export default ProductTable