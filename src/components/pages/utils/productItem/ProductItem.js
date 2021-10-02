import React, { useContext, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";
import { GlobalState } from "../../../../GlobalState";
import {
  ProductCard,
  ProductImg,
  ProductBox,
  ButtonRow,
  BtnBuy,
  BtnView,
} from "./productItem.styled";

const ProductItem = ({ product, isAdmin, scrollTop }) => {
  const state = useContext(GlobalState);
  const addCart = state.userAPI.addCart;
  return (
    <>
      <ProductCard>
        {
          isAdmin && <input type="checkbox" checked={product.checked} />
          //onChange={() => handleCheck(product._id)}
        }
        <ProductImg src={product.images.url} alt="" />
        <ProductBox>
          <h2 title={product.title}>{product.title}</h2>
          <span>₦{product.price}</span>
          <p>{product.description}</p>
        </ProductBox>
        <ButtonRow>
          {isAdmin ? (
            <>
              <Link to="#!">
                <BtnBuy>Delete</BtnBuy>
              </Link>
              <Link to={`/edit_product/${product._id}`}>
                <BtnView>Edit</BtnView>
              </Link>
            </>
          ) : (
            <>
              <Link to="#!" onClick={() => addCart(product)}>
                <BtnBuy>Buy</BtnBuy>
              </Link>
              <Link onClick={scrollTop} to={`/detail/${product._id}`}>
                <BtnView>View</BtnView>
              </Link>{" "}
            </>
          )}
        </ButtonRow>
      </ProductCard>
    </>
  );
};

export default ProductItem;
