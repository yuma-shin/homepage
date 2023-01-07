import { client } from "libs/client";
import type { Post } from "types/blog";
import type { GetStaticPaths, GetStaticProps, } from "next";
import {
    Box,
    Container,
    Divider,
    Heading,
    Stack,
    Alert
} from "@chakra-ui/react";
import React from "react";
import { DateTime } from "components/datetime";
import { MarkdownTemplate } from 'components/markdowntemplate'

type Props = {
    post: Post
    draftKey: String;
}

export default function Article({ post,draftKey }: Props) {
    return post? (
        <>
        {/* プレビューモードであるという表示 */}
        {draftKey && (
            <Alert status='success' variant='left-accent'>
                現在プレビューモードで閲覧中です。
            </Alert>
        )}
        <Box>
            <Container as="main" maxW='800px' pt={10} marginBottom="16">
                <Stack spacing="3">
                    <Heading as="h1" fontSize="4xl" lineHeight={1.6}>
                        {post.title}
                    </Heading>
                    <DateTime datetime={post.publishedAt || ''} />
                </Stack>
                <Divider marginY="3" />
                {/* 記事本文 */}
                <MarkdownTemplate source={post.text} />
            </Container >
        </Box >
        </>
    ):(
        <div>no content</div>
    )
}

/* 記事詳細の静的ファイルの作成 */
export const getStaticPaths: GetStaticPaths = async () => {
    const data = await client.getList<Post>({ endpoint: "post", queries: { fields: 'id' } });
    const totalCount = data.totalCount
    const allData = await client.getList<Post>({ endpoint: "post", queries: { limit: totalCount } });
    const paths = allData.contents.map((content) => `/blog/${content.id}`);
    return { paths, fallback: true };
};

// パラメーターから記事詳細データを取得
//export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
//    if (!params) throw new Error("Error Slug Not Found");
//    const slug = params.slug;
//    const data = await client.getListDetail<Post>({ endpoint: "post", contentId: slug });
//    return {
//        props: {
//            post: data,
//        },
//    };
//};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params, previewData } = context
    if (!params?.slug) {
      throw new Error('Error: ID not found')
    }
  
    /* draftKeyの存在チェック関数 */
    type Draft = {
      draftKey: string
    }
  
    const isDraft = (arg: any): arg is Draft => {
      if (!arg?.draftKey) {
        return false
      }
      return typeof arg.draftKey === 'string'
    }
  
    const slug = String(params.slug);
    /* requestのクエリパラメータを生成*/
    const draftKey = isDraft(previewData)
      ? { draftKey: previewData.draftKey }
      : {}
  
    /* draftKeyを付与してリクエストを投げる */
    try {
      const data = await client.getListDetail<Post>({
        endpoint: "post",
        contentId: slug,
        queries: draftKey
      });
      return {
        props: {
          post: data,
          ...draftKey
        },
      };
    } catch (e) {
      /* 失敗したら404 */
      return { notFound: true }
    }
  };