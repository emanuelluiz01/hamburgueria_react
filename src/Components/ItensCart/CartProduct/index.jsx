import { CartCard } from "./style"

export function CartProduct({ currentSale, removeProduct }){
    return (
        <>
    {currentSale.map((product, index) => 
        
        <CartCard key={index}>
            <figure>
                <img src={product.img}  alt={product.name} />
            </figure>

            <div>
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                {console.log(currentSale)}
            </div>

                <button onClick={() => removeProduct(product.id)}>X</button>
            
        </CartCard>

            
        )}

        </>
    )       
}