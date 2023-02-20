import { EditIcon, ViewIcon } from '@chakra-ui/icons'
import {
  SimpleGrid,
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  HStack,
  Button,
  Divider,
} from '@chakra-ui/react'
import { useLoaderData } from 'react-router-dom'

export default function Dashboard() {
  const tasks = useLoaderData()
  return (
    <SimpleGrid columns={4} spacing="10px" minChildWidth="300px">
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderTop="8px" borderColor="pink.400" bg="white">
            <CardHeader>
              <Flex gap={5}>
                <Box width="50px" height="60px">
                  Av
                </Box>
                <Box>
                  <Heading
                    as="h3"
                    size="sm
                  "
                  >
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>
            <Divider color="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  )
}
export const tasksLoader = async () => {
  const res = await fetch('http://localhost:3000/tasks')
  return res.json()
}
