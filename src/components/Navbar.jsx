import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  HStack,
  Text,
} from '@chakra-ui/react'

import React from 'react'

export default function Navbar() {
  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px">
      <Heading as="h1">Task Manager</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Box bg="gray.200" p="10px">
          m
        </Box>
        <Text>Roba@gmail.com</Text>
        <Button colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}
