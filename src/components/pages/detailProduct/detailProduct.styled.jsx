import styled from "styled-components";
import { css } from "styled-components";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 580px) {
      ${props}
    }
  `;
};

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 50px;
  font-size: 150%;
`;

export const DetailsImg = styled.img`
  max-width: 400px;
  width: 100%;
  margin: 20px;
  height: 450px;
  object-fit: cover;
  display: block;
`;

export const DetailsBox = styled.div`
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

export const DetailsBoxRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnBuyCart = styled.div`
  background: #333;
  color: white;
  margin-top: 10px;
  padding: 10px 25px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export const LinkBuyCart = styled.div`
  background: #555;
  ${"" /* margin-right: 5px; */}
  padding: 6px;
`;
