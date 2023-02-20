import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  HStack,
  Text,
  Avatar,
  AvatarBadge,
} from '@chakra-ui/react'

import React from 'react'
import { useToast } from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons'

export default function Navbar() {
  const toast = useToast()
  const showToast = () => {
    toast({
      title: 'logged out',
      description: 'You have successfully logged out',
      duration: 900,
      status: 'success',
      position: 'top',
      isClosable: true,
      icon: <UnlockIcon />,
    })
  }
  return (
    <Flex as="nav" p="10px" alignItems="center" gap="10px" mb="40px">
      <Heading as="h1">Task Manager</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar name="mario" src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal">
            <Text fontSize="xs" color="white">
              10
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>Roba@gmail.com</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  )
}
