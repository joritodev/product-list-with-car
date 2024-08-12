import { Product } from "../product/product";
import "./list.scss";
import Data from "../../data.json";

export function ProductList() {
  return (
    <>
      <div className="box-grid">
        <h1>Desserts</h1>
        <section className="list-grid">
          {Data.map((product) => (
            <Product
              image={product.image.mobile}
              productType={product.type}
              productName={product.name}
              productPrice={product.price}
              amount={0}
            />
          ))}
        </section>
      </div>
    </>
  );
}
