import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { MenuIcon } from "@chakra-ui/react";

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};
