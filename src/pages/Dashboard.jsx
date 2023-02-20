import { SimpleGrid, Box, Text } from '@chakra-ui/react'

export default function Dashboard() {
  return (
    <SimpleGrid columns={4} spacing="10px" minChildWidth="250px" p="10px">
      <Box bg="white" h="200px" border="1px solid ">
        <Text color={{ base: 'pink.700', md: 'blue.700', lg: 'black.700' }}>
          Hello
        </Text>
      </Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>

      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>

      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
      <Box bg="white" h="200px" border="1px solid "></Box>
    </SimpleGrid>
  )
}
