import { CartProduct } from "./CartProduct";
import { TextCart } from "./CartProduct/style";
import { CartTotal } from "./CartTotal";

export function ItensCart({ currentSale, removeProduct, setCurrentSale }) {
    return (
        <>
            {currentSale.length ? (
                <>
                    <CartProduct removeProduct={removeProduct}currentSale={currentSale}/>
                    <CartTotal setCurrentSale={setCurrentSale} currentSale={currentSale} />
                </>
            ) : (
                <TextCart>Sua sacola esta vazia</TextCart>
            )}
        </>
    );
}
