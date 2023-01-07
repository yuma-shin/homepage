import type { Post } from 'types/blog'
import {
    Box,
    Heading,
    Stack,
    Link,
    Text,
    Button,
    Wrap,
    WrapItem,
    Spacer,
    Flex,
    HStack
} from "@chakra-ui/react";
import { DateTime } from 'components/datetime';
import { TagLink } from 'components/taglink';

type Props = {
    posts: Post[]
}

export const PostList = ({ posts }: Props) => {
    return (
        <>
            {posts.map(post => (
                <Box key={post.id}>
                    <Wrap>
                        {post.tag.map(tag => (
                            <WrapItem key={tag.id}>
                                <TagLink tag={tag} />
                            </WrapItem>
                        ))}
                    </Wrap>
                    <Link href={`/blog/${post.id}`}>
                        <Heading
                            as="h2"
                            fontSize="3xl"
                            lineHeight={1.6}
                            marginTop="1"
                            flex={1}
                            cursor="pointer"
                        >
                            {post.title}
                        </Heading>
                    </Link>
                    <Flex mb={5}>
                    <HStack mr={5}>
                        <Text as='p' fontSize='md' color="gray.500">公開日 : </Text>
                        <DateTime datetime={post.publishedAt || ''} />
                    </HStack>
                    <HStack>
                        <Text as='p' fontSize='md' color="gray.500">更新日 : </Text>
                        <DateTime datetime={post.updatedAt || ''} />
                    </HStack>
                    </Flex>
                    <Text mt="1" fontSize="xl" color="gray.500">{post.description}</Text>
                    <Link href={`/blog/${post.id}`}>
                        <Button colorScheme='teal' variant='outline' size="sm" mt="8">
                            続きを読む
                        </Button>
                    </Link>
                    <Stack mt="10" mb="10" borderBottom="1px" borderColor="gray.300" />
                </Box>
            ))}
        </>
    )
}