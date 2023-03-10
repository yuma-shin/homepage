import { Pagination } from 'components/pagenation';
import { client } from 'libs/client';
import { GetStaticPaths, GetStaticProps, } from "next";
import type { Post } from "types/blog";
import { PostList } from 'components/postlist';
import type { PostTag } from 'types/blog';
import {
    Box,
    Container,
    Heading
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from 'settings/siteSettings';
import { Breadcrumbs } from 'components/breadcrumbs';

type Props = {
    posts: Post[]
    totalCount: number
    currentPage: number
    tag: PostTag
};

export default function BlogTagId({ posts, totalCount, currentPage, tag }: Props) {
    return (
        <Box>
            <Container as="main" maxW="800px" pt={10} marginBottom="16">
                <Breadcrumbs tag={tag}/>
                <PostList posts={posts} />
                <Pagination totalCount={totalCount} currentPage={currentPage} tagId={tag.id} />
            </Container>
        </Box>
    );
}

const getAllTagPagePaths = async () => {
    const resTag = await client.getList<PostTag>({
        endpoint: 'tag',
        queries: { limit: 100 }
    })

    const paths: string[][] = await Promise.all(
        // タグごとに繰りかえして、紐づいた記事一覧のGetリクエストを行い、totalCountを取得していく
        resTag.contents.map((item: PostTag) => {
            const result = client
                .getList<Post>({
                    endpoint: 'post',
                    queries: {
                        filters: `tag[contains]${item.id}`,
                    },
                })
                // タグごとにページ１…ページ２…とパスを生成していく
                .then(({ totalCount }) => {
                    const range = (start: number, end: number) =>
                        [...Array(end - start + 1)].map((_, i) => start + i)

                    return range(1, Math.ceil(totalCount / BLOG_PER_PAGE)).map(
                        (repo) => `/tags/${item.id}/page/${repo}`
                    )
                })
            return result
        })
    )
    // タグごとに配列になっているので、最後にフラットにして返す
    return paths.flat()
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllTagPagePaths()
    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, { tagId: string, id: string }> = async ({ params }) => {
    if (!params) throw new Error("Error Tag ID Not Found");
    const tagId = params.tagId
    const pageId = Number(params.id);
    const data = await client.getList<Post>({
        endpoint: "post",
        queries: {
            offset: (pageId - 1) * BLOG_PER_PAGE,
            limit: BLOG_PER_PAGE, filters: `tag[contains]${tagId}`
        }
    });

    const tag = await client.getListDetail<PostTag>({
        endpoint: 'tag', contentId: tagId
    })

    return {
        props: {
            posts: data.contents,
            totalCount: data.totalCount,
            currentPage: pageId,
            tag: tag,
        },
    };
};