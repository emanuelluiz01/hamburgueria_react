import { ItensCart } from "../ItensCart";
import { CartTotal } from "../ItensCart/CartTotal";
import { Product } from "./Product";
import { CartDiv, Container, UlProducts } from "./style";

export function ProductsList({filteredProducts, setFilteredProducts, products, HandleClick, currentSale, filterProducts, removeProduct, setCurrentSale }){
    return(
        <Container>
            <main>
                <UlProducts>
                    <Product filterProducts={filterProducts} filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} HandleClick={HandleClick} products={products}/>
                </UlProducts>
            </main>

            <aside>
                <CartDiv>Carrinho de compras</CartDiv>
                    <ul>
                        <ItensCart setCurrentSale={setCurrentSale} removeProduct={removeProduct} currentSale={currentSale}/>
                    </ul>
            </aside>
        </Container>
    )
}
