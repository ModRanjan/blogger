import Image from 'next/image';

import { IBlogData } from '@/types/BlogDataTypes';
import { Avatar } from '@/design-system/Molecule/Avatar';
import { Loading } from '@/design-system/Molecule/Loading';

type BlogType = {
  postData?: IBlogData;
};

const Blog = ({ postData }: BlogType) => {
  // for loading state
  if (postData === undefined) {
    return <Loading />;
  }

  return (
    <div className="max-w-3xl mx-auto my-5">
      <h2 className=" page-title">{postData?.title}</h2>

      <div className="flex gap-3 my-2">
        <Avatar
          src={postData.avatar}
          alt={postData.Author}
          width={36}
          height={36}
        />

        <div>
          <h3>{postData.Author}</h3>
          <p className="-m-0.5 text-neutral-600">
            Published in{' '}
            <span className="font-semibold text-neutral-800">
              The Coding Diaries
            </span>
            <span className="ml-2">{postData?.Date}</span>
          </p>
        </div>
      </div>

      <Image
        src={postData.imgUrl}
        alt={postData.Author}
        className="object-cover object-center w-full my-5 h-60"
        width={1080}
        height={100}
        quality={100}
      />

      <p className="">{postData?.blogDescription}</p>

      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        suscipit corrupti, eos autem quisquam dolore itaque voluptate omnis
        sequi. Aperiam quidem harum numquam, fuga facilis aspernatur atque
        repellendus optio accusantium.
      </p>

      <p className="my-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        suscipit corrupti, eos autem quisquam dolore itaque voluptate omnis
        sequi. Aperiam quidem harum numquam, fuga facilis aspernatur atque
        repellendus optio accusantium. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Maiores, adipisci consequuntur. Nostrum, repellat
        eius? Sequi a alias hic unde expedita explicabo obcaecati quaerat
        placeat aut, quasi ut? Exercitationem, nihil aliquid? Dignissimos sed
        suscipit doloribus in cupiditate laboriosam, dolore soluta aperiam
        molestias velit itaque recusandae atque praesentium sapiente asperiores,
        quod qui? Eaque corporis ex tenetur in expedita vel unde, aut
        accusantium! Blanditiis, non minima voluptates eaque iste fugiat tempore
        assumenda.
      </p>

      <p className="my-2">
        Sequi optio velit laborum praesentium, accusantium nisi facere! Sequi
        recusandae dolore voluptatem incidunt ducimus libero, ratione enim sit
        nesciunt suscipit maiores. A dolore facere ea sequi enim consequatur,
        earum, facilis ratione est fugiat animi dicta suscipit sunt? Blanditiis,
        illum ad ipsam dolorum aperiam, officiis minima eum laudantium quis
        ipsum numquam necessitatibus porro adipisci perspiciatis autem explicabo
        maiores?
      </p>

      <p className="my-2">
        Nemo molestias distinctio impedit sed nesciunt nostrum veritatis iure
        odio tempore dolores cum ullam doloribus adipisci porro quos perferendis
        saepe id, voluptatem consectetur minima? Ipsa dignissimos incidunt earum
        pariatur molestiae eaque, consectetur quas soluta libero voluptatibus,
        recusandae veritatis officia quia et assumenda repellendus voluptas,
        architecto reiciendis aperiam alias! Soluta laudantium at consequuntur
        doloribus impedit ullam, architecto fugiat delectus doloremque tenetur!
      </p>

      <div className="my-5">
        <h3 className="text-lg font-semibold">Conclusion</h3>

        <p className="my-3">
          Est porro quo modi sapiente hic iste repellendus vitae officia eum
          nulla expedita accusantium tempora facere similique recusandae nobis
          perspiciatis ipsam necessitatibus id esse, odio dignissimos, beatae
          culpa! Provident, deserunt molestias facilis repellendus dignissimos
          repudiandae eius enim quibusdam sunt reiciendis in pariatur quae
          magnam ipsam error omnis quasi inventore tempora rerum fugit minima
          voluptates voluptatibus neque. Id, blanditiis quos ullam asperiores
          earum totam. Sed quasi praesentium ea soluta placeat tenetur itaque
          iusto dolorum consequatur voluptate temporibus, quas qui aliquam omnis
          dicta optio odio amet esse nostrum et facilis quod numquam pariatur.
          Illum, deserunt. Modi, blanditiis consequuntur. Magni quos rerum
          blanditiis veritatis quidem nulla, voluptatibus incidunt optio modi
          repudiandae provident excepturi voluptates esse eos voluptas tenetur!
          Eaque, dicta harum?
        </p>
      </div>
    </div>
  );
};

export default Blog;
