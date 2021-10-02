import styled from "styled-components";
import { css } from "styled-components";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 580px) {
      ${props}
    }
  `;
};

export const CartDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px;
  font-size: 150%;
  position: relative;
  border: 1px solid #ccc;
  transform: scaleY(0.98);
`;
export const CartImg = styled.img`
  max-width: 400px;
  width: 100%;
  margin: 20px;
  height: 450px;
  object-fit: cover;
  display: block;
`;
export const CartDetailsBox = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 5px 20px;
  ${"" /* text-align: center; */}

  h2 {
    text-transform: uppercase;
    color: darkblue;
    letter-spacing: 2px;
    font-weight: 2rem;
  }

  p {
    line-height: 1.5;
    margin: 10px 0;
    opacity: 0.8;
  }
`;
export const AmountDiv = styled.div`
  & span {
    color: crimson;
    padding: 0 20px;
  }
  & button {
    width: 40px;
    height: 40px;
    border: 1px solid #777;
  }
`;

export const CartdeleteBtn = styled.div`
  position: absolute;
  top: 0;
  right: 5px;
  color: crimson;
  font-weight: 900;
  cursor: pointer;
`;

export const CartTotal = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h3 {
    color: crimson;
  }
`;
