import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import { Badge } from "@material-ui/core";
import {
  MenuRounded,
  CloseRounded,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { NavLink as Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Left,
  Menu,
  Logo,
  LogoAdmin,
  Right,
  MenuItem,
  MenuItemList,
} from "./headerStyled";
import axios from "axios";

const Header = () => {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <MenuItemList>
          <Link to="/create_product">Create Product</Link>
        </MenuItemList>
        <MenuItemList>
          <Link to="/category">Categories</Link>
        </MenuItemList>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <MenuItemList>
          <Link to="/history">History</Link>
        </MenuItemList>
        <MenuItemList>
          <Link to="/" onClick={logoutUser}>
            Logout
          </Link>
        </MenuItemList>
      </>
    );
  };

  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuRounded />
        </Menu>
        <Left>
          <Link to="/">
            {isAdmin ? <LogoAdmin>Admin</LogoAdmin> : <Logo>BB GOLD</Logo>}
          </Link>
        </Left>
        <Right>
          <MenuItem>
            <MenuItemList>
              <Link to="/">Products</Link>
            </MenuItemList>

            {isAdmin && adminRouter()}

            {isLogged ? (
              loggedRouter()
            ) : (
              <MenuItemList>
                <Link to="/login">Login & Register</Link>
              </MenuItemList>
            )}
            <MenuItemList>
              <CloseRounded />
            </MenuItemList>
            {isAdmin ? (
              ""
            ) : (
              <MenuItemList>
                <Badge badgeContent={cart.length} color="error">
                  <Link to="/cart">
                    <ShoppingCartOutlined />
                  </Link>
                </Badge>
              </MenuItemList>
            )}
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
