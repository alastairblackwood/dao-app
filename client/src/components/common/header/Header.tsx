import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Navbar } from "../../common";
import Logo from "../../Logo";
import ThemeToggler from "../../ThemeToggler";
import { ChevronDownIcon } from "@chakra-ui/icons";
import DaoMenuIcon from "../../assets/img/Group3.svg";
import "./Header.css";

const Header = () => {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top_logo">
          <a href="/" className="header-logo">
            LOGO
          </a>
        </section>
        <section className="header-top_navbar">
          {" "}
          <Navbar />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">99999999999</section>
        <section className="header-bottom_email">labrys@labrys.com</section>
      </section>
    </section>
  );
};

export default Header;

// const MenuIcon = () => {
//   return (
//     <Flex>
//       <Box boxSize="lg" w="200%" p={4}>
//         <Image src={DaoMenuIcon} alt="DAO Menu Icon" />
//       </Box>
//     </Flex>
//   );
// };

// type HeaderProps = {
//   title: string;
//   subtitle: string;
//   isOpen: boolean;
// };

// const Header = () => {
//   return (
//     <Menu>
//       {({ isOpen }) => (
//         <>
//           <MenuButton
//             isActive={isOpen}
//             as={Button}
//             rightIcon={<ChevronDownIcon />}
//           >
//             {isOpen ? "Close" : "Menu"}
//           </MenuButton>
//           <MenuList>
//             <MenuItem>Login</MenuItem>
//             <MenuItem onClick={() => alert("Kagebunshin")}>SignUp</MenuItem>
//             <ThemeToggler />
//           </MenuList>
//         </>
//       )}
//     </Menu>
//   );
// };

// export default Header;
