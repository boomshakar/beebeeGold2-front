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
  Right,
  MenuItem,
  MenuItemList,
} from "./headerStyled";
import axios from "axios";

const Header = () => {
  const value = useContext(GlobalState);
  return (
    <Container>
      <Wrapper>
        <Menu>
          <MenuRounded />
        </Menu>
        <Left>
          <Link to="/">
            <Logo>BB GOLD</Logo>
          </Link>
        </Left>
        <Right>
          <MenuItem>
            <MenuItemList>
              <Link to="/">Products</Link>
            </MenuItemList>
            <MenuItemList>
              <Link to="/login">Login & Register</Link>
            </MenuItemList>
            <MenuItemList>
              <CloseRounded />
            </MenuItemList>
            <MenuItemList>
              <Badge badgeContent={4} color="error">
                <Link to="/cart">
                  <ShoppingCartOutlined />
                </Link>
              </Badge>
            </MenuItemList>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
