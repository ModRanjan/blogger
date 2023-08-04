'use client';

import { default as BlogPage } from '@/Organism/Blog';
import { useEffect, useState } from 'react';
import BlogPostData from '@/Constants/blog.json';

type BlogPramsType = {
  params: {
    blogId: string;
  };
};

const Blog = ({ params }: BlogPramsType) => {
  const blogId = params?.blogId;
  const [blogPost, setBlogPost] = useState<any>();

  useEffect(() => {
    const PostData = BlogPostData.BlogsData;

    const currentPost = PostData.find((post) => blogId == post.id.toString());

    setBlogPost(currentPost);
  }, [blogId]);

  return <BlogPage postData={blogPost} />;
};

export default Blog;
