"use client"
import { useState } from "react";
import "./cart.scss";
export function Cart() {  

  return (
    <div className="box">
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
