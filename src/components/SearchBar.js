const SearchBar = ({ products, setInputSearch }) => {

    const handleSearch = (getInput) => {
        const filteredInput = products.filter(product => {
            return product.name.toLowerCase().includes(getInput.target.value.toLowerCase())
        })
        setInputSearch(filteredInput)
    }

    return (
        <div className="searchbar">
            <h2>Search</h2>
            <input type="text"
                onChange={handleSearch}
                placeholder="Name of the product"
            />
            <label>
                <input type="checkbox"
                />
                Only show products in stock
            </label>
        </div>
    )

}

export default SearchBar