import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [inputSearch, setInputSearch] = useState(jsonData)
  const [checkBox, setCheckBox] = useState(false)

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar
        products={products} setInputSearch={setInputSearch} />
      <ProductTable products={inputSearch} />
    </div>
  )
}

export default ProductsPage