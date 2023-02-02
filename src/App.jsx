import { GlobalStyle } from "./styles/global";
import { PageHeader } from "./Components/Header";
import { ProductsList } from "./Components/ProductsList";
import { useEffect, useState } from "react";
import { ItensCart } from "./Components/ItensCart";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [filteredProducts, setFilteredProducts] = useState('')
  
  useEffect(() => {
    axios.get('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(res => setProducts(res.data))
  },[])

    const lowerBusca = filteredProducts.toLowerCase()

    const filterProducts = products.filter((product) => product.name.toLowerCase().includes(lowerBusca))

    function removeProduct(productId){
      const listRefreshed = currentSale.filter(product => product.id !== productId)
      setCurrentSale(listRefreshed)
    }
    

  function HandleClick(productId){
    const productFind = products.find((product) => product.id === productId)
    setCurrentSale([...currentSale, {...productFind, quantity: +1}]) 
  }
  
  return (
    <div className="App">
      <GlobalStyle/>
      <PageHeader filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} products={products}/>
      <ProductsList filterProducts={filterProducts} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} HandleClick={HandleClick} products={products} currentSale={currentSale} setCurrentSale={setCurrentSale} removeProduct={removeProduct} />
    </div>
  );
}

export default App;
