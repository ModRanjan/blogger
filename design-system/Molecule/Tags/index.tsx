import { Tag } from '@/Atom/Tag';

export const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-x-2">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};
