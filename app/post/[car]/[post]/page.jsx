import React from 'react';
import PostContentBody from './PostBodyContent';
import { getPostData, getPostsFiles } from '../../../../lib/util';

const Post = ({ params }) => {
  return (
    <>
      <PostContentBody post={getPostData(params.car, params.post)} />
    </>
  );
}

// export async function generateStaticParams() {
//   const posts = getPostsFiles();

//   return posts.map((post) => ({
//     post: post,
//   }));
// }

export default Post;