import { Container, Stack, Text,Center } from '@chakra-ui/react'
import * as React from 'react'

function Footer() {
    return(
        <>
        <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
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