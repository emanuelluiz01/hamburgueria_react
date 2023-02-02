import burguer from "../../../202109090436_skn5yx754p 1.svg";
import { Cards } from "./style";

export function Product({ filterProducts, HandleClick }) {
  
  return filterProducts.map((product) => {
      function value() {
          return product.price.toLocaleString("pt-br", {style: "currency",currency: "BRL",});
      }

        return (
            <Cards key={product.id}>
                <figure>
                    <img src={product.img} alt="" />
                </figure>
                <div>
                    <h3>{product.name}</h3>
                    <span>{product.category}</span>
                    <p>{value()}</p>
                    <button onClick={() => HandleClick(product.id)}>Adicionar</button>
                </div>
            </Cards>
        );
    });
}
