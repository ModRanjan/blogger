import { FiMoreVertical } from 'react-icons/fi';

import { Button } from '@/Atom/Button';
import { Icon } from '@/Atom/Icon';

import { Avatar } from '@/Molecule/Avatar';

export const Comment = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-x-2 text-neutral-700">
          <Avatar src="/profiles/E1.jpg" alt="" width={36} height={36} />
          <span className="text-lg">{'Xyz'}</span>
        </div>

        <Button
          size={'slim'}
          className="bg-transparent border-none rounded-lg hover:bg-transparent"
        >
          <Icon icon={FiMoreVertical} />
        </Button>
      </div>

      <p className="mt-2 text-neutral-700">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, eaque!
      </p>
    </>
  );
};
