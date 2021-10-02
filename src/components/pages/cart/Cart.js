import { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import {
  AmountDiv,
  CartdeleteBtn,
  CartDetailsBox,
  CartDiv,
  CartImg,
  CartTotal,
} from "./cart.styled";

const Cart = () => {
  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;
  const [total, setTotal] = useState(0);

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    );

  return (
    <div>
      {cart.map((product) => (
        <CartDiv key={product._id}>
          <CartImg src={product.images.url} alt="" />

          <CartDetailsBox>
            <h2>{product.title}</h2>

            <h3>$ {product.price * product.quantity}</h3>
            <p>{product.description}</p>
            <p>{product.content}</p>

            <AmountDiv>
              <button> - </button>
              <span>{product.quantity}</span>
              <button> + </button>
            </AmountDiv>

            <CartdeleteBtn>X</CartdeleteBtn>
          </CartDetailsBox>
        </CartDiv>
      ))}

      <CartTotal>
        <h3>Total: $ {total}</h3>
        {/* <PaypalButton
                total={total}
                tranSuccess={tranSuccess} /> */}
      </CartTotal>
    </div>
  );
};

export default Cart;
