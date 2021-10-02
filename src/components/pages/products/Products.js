import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import styled from "styled-components";
// import { css } from "styled-components";
import Loading from "../utils/loading/Loading";

export const ProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-items: center;
  margin: 20px 0;
`;

const Products = () => {
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  return (
    <>
      <div>
        <ProductContainer>
          {products.map((product) => {
            return (
              <ProductItem
                key={product._id}
                product={product}
                isAdmin={isAdmin}
              />
            );
          })}
        </ProductContainer>
      </div>
      {products.length === 0 && <Loading />}
    </>
  );
};

export default Products;
