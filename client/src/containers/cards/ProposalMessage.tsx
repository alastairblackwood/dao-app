import React from "react";
import { Box, Text, Input, Button } from "@chakra-ui/react";

interface IMessageProps {
  headerPolicy: string;
  blurb: string;
}

const Message = (props: IMessageProps) => {
  return (
    <Box className="ui message">
      <Box className="header">
        <Text color="gray.500">
          {props.headerPolicy}
          <Box>{props.blurb}</Box>
        </Text>
      </Box>
    </Box>
  );
};

export default Message;
