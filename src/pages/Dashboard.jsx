import { Heading, Container, Text } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react/dist'

export default function Dashboard() {
  return (
    <Container as="section">
      <Heading my="30px" p="10px">
        Chakra UI Components
      </Heading>
      <Text ml="30px" color="blue" fontWeight="bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit fugit
        ad perferendis libero cumque quae accusantium culpa sunt debitis
        molestiae.
      </Text>
      <Box my="30px" p="20px" bg="cyan">
        <Text color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eligendi
          quo officia ipsam facere impedit.
        </Text>
      </Box>
    </Container>
  )
}
