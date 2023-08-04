import { Paragraph } from '@/design-system/Atom/Paragraph';

type BlogType = {
  postData: any;
};

const Blog = ({ postData }: BlogType) => {
  return (
    <div className="">
      <h2 className="section-title">{postData?.title}</h2>

      <Paragraph>{postData?.blogDescription}</Paragraph>
    </div>
  );
};

export default Blog;
