import { Product } from "../product/product";

interface ProductCartProps {
  id: number;
  name: string;
  price: number;
  amount: number;
}

export function ProductCart({id, name, price, amount }: ProductCartProps) {
  const handleRemoveFromCart = (id: number) => {};
  return (
    <>
      <ul>
        <li>
          <span>{name}</span>
          <div>
            <span>{amount}</span>
            <span>@ ${price}</span>
            <span>$ {price * amount}</span>
          </div>
          <a onClick={() => handleRemoveFromCart(id)}>
            <img src="icon-remove-item.svg" alt="Remove Item" />
          </a>
        </li>
      </ul>
    </>
  );
}
