import Image from 'next/image';

export interface IAvatar {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Avatar = ({ src, alt, width, height }: IAvatar) => {
  return (
    <Image
      src={src}
      className="inline-block rounded-full bg-secondary-200"
      alt={alt}
      width={width}
      height={height}
      quality={100}
    />
  );
};
