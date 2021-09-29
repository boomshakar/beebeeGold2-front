import styled from "styled-components";
import { css } from "styled-components";
import logoBack from "../../img/back.png";

const mobile = (props) => {
  return css`
    @media only screen and (max-width: 580px) {
      ${props}
    }
  `;
};

export const Container = styled.div`
  min-height: 70px;
  width: 100%;
`;
export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  ${mobile({ padding: "10px 0px" })}
`;

export const Left = styled.div`
  flex: 1;
  text-align: center;
`;

export const Menu = styled.div`
  display: none;
`;

export const Logo = styled.h1`
  font-weight: 900;
  font-size: 55px;
  background: #f2a154;
  color: transparent;
  -webkit-text-stroke: 1px #000;
  background-image: url(${logoBack});
  -webkit-background-clip: text;
  background-position: center;
  animation: back 30s linear infinite;

  @keyframes back {
    100% {
      background-position: 2000px 0;
    }
  }
  ${mobile({ fontSize: "24px" })};
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "space-around" })}
`;

export const MenuItem = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const MenuItemList = styled.li`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  display: inline-block;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
