import { Box,
         Image,
         Spacer,
         Container,
         Center,
         Heading,
         Text,
         Tabs,
         Tab,
         TabList,
         TabPanels,
         TabPanel,
         Button,
         Link,
         Icon,
         HStack,
         Stack
        } from '@chakra-ui/react'
import { AiFillGithub,AiFillInstagram,AiOutlineTwitter,AiFillYoutube,AiFillHeart } from 'react-icons/ai'
import { SiQiita } from 'react-icons/si'

function Home(){
  return (
    <>
      <Container maxW='800px' pt={10} marginBottom="16">
        <HStack>
          <Center w='200px' h='100%'>
            <Image
              borderRadius='full'
              boxSize='150px'
              src='/myphoto.webp'
              alt='Yuma Shintani'
            />
          </Center>
          <Center h='100%'>
            <Box>
              <Heading>Yuma Shintani</Heading>
              <Text>Engineer</Text>
              <Text>Voice Communication, Network, Cloud</Text>
            </Box>
          </Center>
        </HStack>
        <Spacer/>
        <Box pt={10}>
          <Heading size='md' mb={1}>Work</Heading>
          <Text>
            社会人5年目のエンジニアです。某通信会社にて音声系サービスの検証業務を担当しています。
          </Text>
        </Box>
        <Box pt={10}>
          <Heading size='md' mb={1}>Skils</Heading>
          <Tabs size={'sm'} variant='soft-rounded' colorScheme='teal' pt={5} isFitted>
            <TabList>
              <Tab>Cisco</Tab>
              <Tab>Language</Tab>
              <Tab>Linux</Tab>
              <Tab>Other</Tab>
            </TabList>
            <TabPanels pl={10}>
              <TabPanel>
                <ul>
                  <li>Cisco Unified Communications Manager (CallManager)</li>
                  <li>Cisco Unity Connection</li>
                  <li>Cisco Unified Communications Managr IM&Presence</li>
                  <li>Cisco Expressway</li>
                  <li>Catalyst</li>
                  <li>Nexus</li>
                  <li>ISR</li>
                  <li>ASR</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>Python</li>
                  <li>TypeScript</li>
                  <li>Ansible</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <ul>
                  <li>CentOS</li>
                  <li>Red Hat Enterprise Linux</li>
                  <li>Ubuntu</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <ul>
                  <li>Maria DB</li>
                  <li>PostgreSQL</li>
                  <li>Sqlite3</li>
                  <li>Enterprise Cloud 1.0</li>
                  <li>Enterprise Cloud 2.0</li>
                  <li>Smart Data Platform</li>
                  <li>VMware vSphere</li>
                  <li>Zabbix</li>
                </ul>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box pt={10}>
          <Heading size='md' mb={1}><Icon as={AiFillHeart} pt={1}/>Music</Heading>
          <HStack pt={5} display={{ sm: 'flex' }}>
            <Center w='200px' h='100%'>
              <Link href='https://youtu.be/tGvZQ_vfosg'>
                <Image
                  //borderRadius='full'
                  //boxSize='150px'
                  maxW='200px'
                  src='https://img.youtube.com/vi/tGvZQ_vfosg/mqdefault.jpg'
                  alt='ErroЯ CODE | Who-ya Extended'
                  
                />
              </Link>
            </Center>
            <Stack h='100%'>
              <Box ml={5}>
                <Heading fontSize={'xl'}>ErroЯ CODE</Heading>
                <Text>Who-ya Extended</Text>
                <Button colorScheme='teal' variant='ghost'>
                  <Icon as={AiFillYoutube} w={5} h={5} mr={1}/><Link href='https://youtu.be/tGvZQ_vfosg' target='_blank'>MUSIC VIDEO</Link>
                </Button>
              </Box>
            </Stack>
          </HStack>

        </Box>
        <Box pt={10}>
          <Heading size='md' mb={1}>Links</Heading>
          <Button colorScheme='teal' variant='ghost'>
            <Icon as={AiFillGithub} w={5} h={5} mr={1}/><Link href='https://github.com/yuma-shin' target='_blank'>@yuma-shin</Link>
          </Button><br/>
          <Button colorScheme='teal' variant='ghost'>
            <Icon as={AiOutlineTwitter} w={5} h={5} mr={1}/><Link href='https://twitter.com/TSUMTSUM_YUMA' target='_blank'>@TSUMTSUM_YUMA</Link>
          </Button><br/>
          <Button colorScheme='teal' variant='ghost'>
            <Icon as={AiFillInstagram} w={5} h={5} mr={1}/><Link href='https://www.instagram.com/yuma.shintani/' target='_blank'>@yuma.shintani</Link>
          </Button><br/>
          <Button colorScheme='teal' variant='ghost'>
            <Icon as={SiQiita} w={5} h={5} mr={1}/><Link href='https://qiita.com/y-shin' target='_blank'>@y-shin</Link>
          </Button>
        </Box>
      </Container>
    </>
  )
}

export default Home