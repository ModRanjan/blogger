import Link from 'next/link';

import BlogPostData from '@/Constants/blog.json';

import { CustomSaperator } from '@/design-system/Atom/Saperator';

import { BlogCard } from '@/Organism/BlogCard';

const Blogs = () => {
  return (
    <div>
      {BlogPostData.BlogsData.map((item) => {
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
  );
};

export default Blogs;
