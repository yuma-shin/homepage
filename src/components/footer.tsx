import { Container, Stack, Text,Center } from '@chakra-ui/react'
import * as React from 'react'

function Footer() {
    return(
        <>
        <Container as="footer" role="contentinfo" py={{ base: '5', md: '5' }}>
            <Center>
                <Text fontSize="sm" color="subtle">
                    &copy; {new Date().getFullYear()} Yuma Shintani. All rights reserved.
                </Text>
            </Center>
        </Container>
        </>
    )
}

export default Footer