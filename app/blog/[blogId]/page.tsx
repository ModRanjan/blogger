'use client';

import { useEffect, useState } from 'react';

import { default as BlogPage } from '@/Organism/Blog';
import { Comment } from '@/Organism/Comment';

import BlogPostData from '@/Constants/blog.json';

import { IBlogData } from '@/types/BlogDataTypes';

type BlogPramsType = {
  params: {
    blogId: string;
  };
};

const Blog = ({ params }: BlogPramsType) => {
  const blogId = params?.blogId;
  const [blogPost, setBlogPost] = useState<IBlogData>();

  useEffect(() => {
    const PostData = BlogPostData.BlogsData;

    const currentPost = PostData.find((post) => blogId == post.id.toString());

    setBlogPost(currentPost);
  }, [blogId]);

  return (
    <>
      <BlogPage postData={blogPost} />

      <Comment />
    </>
  );
};

export default Blog;
