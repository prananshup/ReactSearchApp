import SearchBar from "./SearchBar";
import ProductsTable from "./ProductsTable";
import { useState } from "react";

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const App = () => {
  const [filterProductsText, setFilterProductsText] = useState('');
  const [hideStockedProduct, setHideStockedProduct] = useState(false);

  const setSearchText = (value) => {
    setFilterProductsText(value);
  }

  
  return (
    <div className="App">
      <SearchBar setSearchText={setSearchText} hideStocked={ v => setHideStockedProduct(v) }/>
      <ProductsTable products={PRODUCTS} filterProductsText={filterProductsText} hideStockedProduct={ hideStockedProduct}/>
    </div>
  );

  
}



export default App;
