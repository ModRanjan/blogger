import { Paragraph } from '@/design-system/Atom/Paragraph';
import { Avatar } from '@/design-system/Molecule/Avatar';
import Image from 'next/image';

export interface IBlogCard {
  avatarUrl: string;
  postBannerUrl: string;
  authorName: string;
  summary: string;
  publishDate: string;
  tags: string[];
}

export const BlogCard = ({
  avatarUrl,
  postBannerUrl,
  authorName,
  summary,
  publishDate,
  tags,
}: IBlogCard) => {
  return (
    <div className="cursor-pointer">
      <div className="flex items-center h-7 gap-x-4">
        <div className="">
          <Avatar src={avatarUrl} alt={authorName} width={28} height={28} />
          <span className="mt-1 ml-2 font-sans text-base">{authorName}</span>
        </div>

        <span className="text-sm">{publishDate}</span>
      </div>

      <h2 className="mt-2 text-xl font-semibold card-title">{authorName}</h2>

      <div className="flex mt-3 gap-x-6">
        <Paragraph className="text-sm ">{summary}</Paragraph>
        <Image
          src={postBannerUrl}
          alt={'blog-post-banner'}
          width={96}
          height={96}
        />
      </div>

      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-3 py-2 mr-2 text-xs font-semibold text-white rounded-3xl bg-neutral-400"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};
