import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  LinkIcon,
  StarIcon,
  WarningIcon,
} from '@chakra-ui/icons'
import {
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple">
      <TabList>
        <Tab
          _selected={{ color: 'white', bg: 'purple.400', borderRadius: '5px' }}
        >
          Account Info
        </Tab>
        <Tab
          _selected={{ color: 'white', bg: 'purple.400', borderRadius: '5px' }}
        >
          Task History
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <LinkIcon as={EmailIcon} />
              Email: maro@gmail.com
            </ListItem>
            <ListItem>
              <LinkIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <LinkIcon as={StarIcon} />
              Lorem ipsum dolor sit amet
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <LinkIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <LinkIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <LinkIcon as={WarningIcon} color="yellow.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <LinkIcon as={CheckCircleIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <LinkIcon as={WarningIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
