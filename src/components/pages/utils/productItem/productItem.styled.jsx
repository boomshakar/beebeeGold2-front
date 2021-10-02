import styled from "styled-components";
import { css } from "styled-components";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 580px) {
      ${props}
    }
  `;
};

// export const Container = styled.div`
//   min-height: 70px;
//   width: 100%;
// `;
// export const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   border-bottom: 1px solid #ddd;
//   ${mobile({ padding: "10px 0px" })}
// `;

export const ProductCard = styled.div`
  width: 300px;
  overflow: hidden;
  height: 500px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 0 15px #ddd;
  margin: 10px 0;
  position: relative;

  & input {
    position: absolute;
    width: 25px;
    height: 25px;
  }
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 300px;
  display: block;
  object-fit: cover;
`;

export const ProductBox = styled.div`
  & h2 {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-transform: capitalize;
    cursor: pointer;
    color: #323232;
  }

  & span {
    color: crimson;
  }

  & p {
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    height: 70px;
    overflow: hidden;
    color: #323232;
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  & a {
    width: 48%;
    text-align: center;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 0px;
  }
`;

export const BtnBuy = styled.div`
  background: #555;
  ${"" /* margin-right: 5px; */}
  padding: 6px;
`;
export const BtnView = styled.div`
  background: teal;
  ${"" /* margin-right: 5px; */}
  padding: 6px;
`;
