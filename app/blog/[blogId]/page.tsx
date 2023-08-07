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
      {/* we have only 2 pages so we can ignore this Back Button */}
      {/* <Button className="border-none " onClick={() => router.push('/')}>
        <Icon
          icon={AiOutlineDoubleLeft}
          className="inline-block w-4 h-4 -mt-1"
        />
        Back
      </Button> */}

      <BlogPage postData={blogPost} />

      <Comments commentHandler={submitComment} />
    </>
  );
}
