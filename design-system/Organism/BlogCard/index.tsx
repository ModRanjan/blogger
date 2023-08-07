import Image from 'next/image';

import { Paragraph } from '@/Atom/Paragraph';

import { Avatar } from '@/Molecule/Avatar';
import { Tags } from '@/Molecule/Tags';

export interface IBlogCard {
  avatarUrl: string;
  postBannerUrl: string;
  title: string;
  authorName: string;
  summary: string;
  publishDate: string;
  tags: string[];
  onclickHandler: () => void;
}

export const BlogCard = ({
  avatarUrl,
  title,
  postBannerUrl,
  authorName,
  summary,
  publishDate,
  tags,
  onclickHandler,
}: IBlogCard) => {
  return (
    <div
      className="px-3 py-5 overflow-hidden cursor-pointer lg:px-6"
      onClick={onclickHandler}
    >
      <div className="flex items-center font-mono h-7 gap-x-4">
        <div className="flex items-center gap-x-2">
          <Avatar src={avatarUrl} alt={authorName} width={28} height={28} />
          <span className="font-sans text-base">{authorName}</span>
        </div>

        <span className="text-sm">{publishDate}</span>
      </div>

      <div className="flex mt-2 md:gap-x-4 gap-x-2">
        <div>
          {/* we can make a saperate component for titles, for simplicity, reusability  */}
          <h2 className="text-xl card-title text-ellipsis">{title}</h2>

          <Paragraph className="hidden max-w-4xl mt-3 font-mono text-sm md:inline-block ">
            {summary}
          </Paragraph>
        </div>

        <Image
          src={postBannerUrl} // postBannerUrl may be undefined, but right now in createBlog form I made every things compulsory to fill.
          alt={'blog-post-banner'} // we can specify bannerName here
          className="inline-block w-24"
          width={96}
          height={96}
        />
      </div>

      <Tags tags={tags} />
    </div>
  );
};
