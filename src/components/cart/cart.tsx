"use client";
import { useState } from "react";
import "./cart.scss";

interface ICartItem {
  id: number,
  name: string,
  price: number,
  amount: number
}

export function Cart() {
  const [cart, setCart] = useState<ICartItem[]>([])

  

  return (
    <div className="box-cart">
      <h2>
        Your Cart (<span>0</span>)
      </h2>
      <>
        <div className="emptyCartDetail">
          <img src="illustration-empty-cart.svg" alt="Empty Cart" />
          <p>Your added items will appear here</p>
        </div>
      </>
    </div>
  );
}
