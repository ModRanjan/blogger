'use client';

import { useEffect, useState } from 'react';

import BlogPostData from '@/Constants/blog.json';

import { CustomSaperator } from '@/Atom/Saperator';

import { BlogsLoading } from '@/Molecule/Loading';

import { BlogCard } from '@/Organism/BlogCard';
import { Pagination } from '@/Organism/Pagination';

import { IBlogData } from '@/types/BlogDataTypes';
import { MAX_BLOG_DATA_PER_PAGE } from '@/constants/Default';
import { useRouter } from 'next/navigation';

const Blogs = () => {
  const router = useRouter();
  const [Blogs, setBlogs] = useState<IBlogData[]>();
  const [dataCount, setDataCount] = useState(0);
  const [currentDataCount, setCurrentDataCount] = useState(
    MAX_BLOG_DATA_PER_PAGE,
  );

  const HandleLeftPagination = () => {
    if (currentDataCount >= 2) {
      const tempBlogPosts = BlogPostData.BlogsData.slice(
        currentDataCount - 2,
        currentDataCount,
      );

      setCurrentDataCount((prev) => prev - 2);
      setBlogs(tempBlogPosts);
    }
  };

  const HandleRightPagination = () => {
    if (currentDataCount <= dataCount) {
      const tempBlogPosts = BlogPostData.BlogsData.slice(
        currentDataCount,
        currentDataCount + 2,
      );

      setCurrentDataCount((prev) => prev + 2);
      setBlogs(tempBlogPosts);
    }
  };

  useEffect(() => {
    // this is temproryData latter we can use api for fetching data
    const tempBlogPosts = BlogPostData.BlogsData.slice(0, 2);
    const tempDataCount = BlogPostData.BlogsData.length;

    setDataCount(tempDataCount);
    setCurrentDataCount(2);

    setBlogs(tempBlogPosts);
  }, []);

  if (!Blogs) {
    return <BlogsLoading maxWidth="max-w-5xl" />;
  }

  return (
    <div className="max-w-5xl py-8 md:mx-auto">
      {Blogs.map((blog) => {
        return (
          <div key={blog.id}>
            <BlogCard
              title={blog.title}
              avatarUrl={blog.avatar}
              postBannerUrl={blog.imgUrl}
              authorName={blog.Author}
              summary={blog.blogDescription}
              publishDate={blog.Date}
              tags={blog.tags}
              onclickHandler={() => router.push(`/blog/${blog.id}`)}
            />

            <CustomSaperator className="my-8 border-t border-gray-300" />
          </div>
        );
      })}

      <div className="flex justify-end">
        <Pagination
          totalDataCount={dataCount}
          currentDataCount={currentDataCount}
          leftClickHandler={HandleLeftPagination}
          rightClickHandler={HandleRightPagination}
        />
      </div>
    </div>
  );
};

export default Blogs;
