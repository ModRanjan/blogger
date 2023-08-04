'use client';

import { useEffect, useState } from 'react';

import { default as BlogPage } from '@/Organism/Blog';
import { Comments } from '@/Organism/Comments';

import BlogPostData from '@/Constants/blog.json';

import { IBlogData } from '@/types/BlogDataTypes';

type BlogPramsType = {
  params: {
    blogId: string;
  };
};

export default function Blog({ params }: BlogPramsType) {
  const blogId = params?.blogId;
  const [blogPost, setBlogPost] = useState<IBlogData>();

  useEffect(() => {
    const PostData = BlogPostData.BlogsData;

    const currentPost = PostData.find((post) => blogId == post.id.toString());

    setBlogPost(currentPost);
  }, [blogId]);

  const submitComment = () => {
    console.log('first');
  };

  return (
    <>
      <BlogPage postData={blogPost} />

      <Comments commentHandler={submitComment} />
    </>
  );
}
