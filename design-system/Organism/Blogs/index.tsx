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
  useEffect(() => {
    // this is temproryData latter we can use api for fetching data
    const tempBlogPosts = BlogPostData.BlogsData.slice(0, 10);

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
        leftClickHandler={() => console.log('first')}
        rightClickHandler={() => console.log('first')}
      />
    </>
  );
};

export default Blogs;
