import { AddToCart } from "../icons/add-to-cart";
import "./product.scss";
import { DecrementIcon } from "../icons/decrement-icon";
import { IncrementIcon } from "../icons/increment-icon";

interface ProductProps {
  image: string;
  productType: string;
  productName?: string;
  productPrice?: string;
  amount: 0;
}
export function Product({
  image,
  productType,
  productName,
  productPrice,
}: ProductProps) {
  return (
    <div className="box-product">
      <img src={image} alt={productName} />
      <div className="cart">
        <a className="addcart">
          <a className="decrement">
            <DecrementIcon />
          </a>
          <div>
            <AddToCart />
            <span>Add to Cart</span>
          </div>
          <span className="amount">{1}</span>
          <a className="increment">
            <IncrementIcon />
          </a>
        </a>
      </div>
      <div className="productName-price">
        <span>{productType}</span>
        <h3 className="name">{productName}</h3>
        <h3 className="price">${productPrice}</h3>
      </div>
    </div>
  );
}
