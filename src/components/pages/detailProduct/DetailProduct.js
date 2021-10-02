import React, { useContext, useState, useEffect } from "react";
import { NavLink as Link, useParams } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import { ProductContainer } from "../products/Products";
import ProductItem from "../utils/productItem/ProductItem";
import {
  BtnBuyCart,
  Details,
  DetailsBox,
  DetailsBoxRow,
  DetailsImg,
} from "./detailProduct.styled";

const DetailProduct = () => {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [detailProduct, setDetailProduct] = useState([]);

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
    scrollTop();
  }, [params.id, products]);

  if (detailProduct.length === 0) return null;

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <Details>
        <DetailsImg src={detailProduct.images.url} alt="" />
        <DetailsBox>
          <DetailsBoxRow>
            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>
          </DetailsBoxRow>
          <span>₦ {detailProduct.price}</span>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          <p>Sold: {detailProduct.sold}</p>
          <Link
            to="/cart"
            className="cart"
            // onClick={() => addCart(detailProduct)}
          >
            <BtnBuyCart>Buy Now</BtnBuyCart>
          </Link>
        </DetailsBox>
      </Details>

      <div>
        <h2>Related Products</h2>
        <div className="products">
          <ProductContainer>
            {products
              .filter((product) => product.category === detailProduct.category)
              .slice(0, 3)
              .map((product) => {
                return (
                  <ProductItem
                    key={product._id}
                    product={product}
                    scrollTop={scrollTop}
                  />
                );
              })}
          </ProductContainer>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
