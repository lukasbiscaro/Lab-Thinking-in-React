const SearchBar = ({ products }) => {

    return (
        <div className="searchbar">
            <h2>Search</h2>
            <input type="text"
                placeholder="Name of the product" />
            <label>
                <input type="checkbox" />
                Only show products in stock
            </label>
        </div>
    )
}

export default SearchBar