import { useEffect, useState } from "react";
import { ButtonRemoveAll, DivTotal } from "./style";

export function CartTotal({ currentSale, setCurrentSale }) {

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        setCartTotal(currentSale.reduce((a, b) => a + b.price, 0));
    }, [currentSale]);

    function value(){
        return cartTotal.toLocaleString('pt-br',{ style: 'currency', currency: 'BRL' })
    }

    return (
        <DivTotal>
            <div>
                <p>Total</p>
                <p>{value()}</p>
            </div>
            <ButtonRemoveAll onClick={() => setCurrentSale([])}>Remover Todos</ButtonRemoveAll>
        </DivTotal>
    );
}
