import logo from '../../logo.svg'
import { InputSearch } from './InputSearch';

import { Header } from "./style";

export function PageHeader({ products, filteredProducts, setFilteredProducts }) {
  return (
    <Header>
      <div>
        <img src={logo} alt="" />
        <InputSearch filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} products={products}/>
      </div>
    </Header>
  );
}
