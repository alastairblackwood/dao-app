import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Logo from "../Logo";
import ThemeToggler from "../ThemeToggler";
import { ChevronDownIcon } from "@chakra-ui/icons";

type HeaderProps = {
  title: string;
  subtitle: string;
  isOpen: boolean;
};

const Header = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {isOpen ? "Close" : "Menu"}
          </MenuButton>
          <MenuList>
            <MenuItem>Login</MenuItem>
            <MenuItem onClick={() => alert("Kagebunshin")}>SignUp</MenuItem>
            <ThemeToggler />
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default Header;
