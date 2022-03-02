import {
  Box,
  Button,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';

interface IProposalCardProps {
  children: React.ReactNode;
}

const ProposalCard = (props: IProposalCardProps) => {
  return (
    <Box className="ui cards" p={8} bg="black.300" shadow="md" rounded="sm">
      <Box className="content">{props.children}</Box>
      <Box className="extra content">
        <Box className="ui three buttons">
          <Button color="green">Approved</Button>
          <Button color="purple">In Progress</Button>
          <Button color="red">Declined</Button>
        </Box>
      </Box>
    </Box>
  );
};
