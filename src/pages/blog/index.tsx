import type { NextPage } from 'next'
import { client } from 'libs/client';
import { Post } from 'types/blog'
import { PostList } from 'components/postlist';
import {
  Container,
  Heading
} from "@chakra-ui/react";
import { BLOG_PER_PAGE } from 'settings/siteSettings';
import { Pagination } from 'components/pagenation';
import { Breadcrumbs } from 'components/breadcrumbs';

export const getStaticProps = async () => {
  // 変更 limitに設定値を指定する
  const data = await client.getList({ endpoint: "post", queries: { limit: BLOG_PER_PAGE } });
  return {
    props: {
      posts: data.contents,
      totalCount: data.totalCount,
    },
  };
};

type Props = {
  posts: Post[];
  totalCount: number
};

// 変更
const Blog: NextPage<Props> = ({ posts, totalCount }) => {
  return (
    <>
      <Container maxW='800px' pt={10} marginBottom="16">
        <Breadcrumbs />
        <PostList posts={posts} />
        <Pagination totalCount={totalCount}></Pagination>
      </Container>
    </>
  )
}

export default Blog