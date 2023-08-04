'use client';
import { Button } from '@/design-system/Atom/Button';
import { Icon } from '@/design-system/Atom/Icon';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

type PaginationType = {
  leftClickHandler: () => void;
  rightClickHandler: () => void;
};
export const Pagination = ({
  leftClickHandler,
  rightClickHandler,
}: PaginationType) => {
  return (
    <div className="text-black">
      <Button
        variant={'primary'}
        className="rounded-full bg-neutral-500"
        onClick={leftClickHandler}
      >
        <Icon icon={AiOutlineDoubleLeft} className="inline-block mr-2" />
        Prev
      </Button>

      <Button
        variant={'primary'}
        className="rounded-full bg-neutral-500"
        onClick={rightClickHandler}
      >
        Next
        <Icon icon={AiOutlineDoubleRight} className="inline-block ml-2" />
      </Button>
    </div>
  );
};
