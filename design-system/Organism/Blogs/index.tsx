'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import BlogPostData from '@/Constants/blog.json';

import { CustomSaperator } from '@/Atom/Saperator';

import { Loading } from '@/Molecule/Loading';

import { BlogCard } from '@/Organism/BlogCard';
import { Pagination } from '@/Organism/Pagination';

import { IBlogData } from '@/types/BlogDataTypes';

const Blogs = () => {
  const [Blogs, setBlogs] = useState<IBlogData[]>();
  const [dataCount, setDataCount] = useState(0);
  const [currentDataCount, setCurrentDataCount] = useState(2);

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

    console.log('datacount: ', tempDataCount);
    setDataCount(tempDataCount);
    setCurrentDataCount(2);

    setBlogs(tempBlogPosts);
  }, []);

  if (!Blogs) {
    return <Loading maxWidth="max-w-5xl" />;
  }

  return (
    <>
      <div>
        {Blogs.map((item) => {
          return (
            <div key={item.id}>
              <Link href={`/blog/${item.id}`}>
                <BlogCard
                  avatarUrl={item.avatar}
                  postBannerUrl={item.imgUrl}
                  authorName={item.Author}
                  summary={item.blogDescription}
                  publishDate={item.Date}
                  tags={item.tags}
                />
              </Link>

              <CustomSaperator className="my-8 border-t border-gray-300" />
            </div>
          );
        })}
      </div>

      <Pagination
        totalDataCount={dataCount}
        currentDataCount={currentDataCount}
        leftClickHandler={HandleLeftPagination}
        rightClickHandler={HandleRightPagination}
      />
    </>
  );
};

export default Blogs;
