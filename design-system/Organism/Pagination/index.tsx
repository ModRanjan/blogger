'use client';

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

import { Button } from '@/Atom/Button';
import { Icon } from '@/Atom/Icon';

type PaginationType = {
  leftClickHandler: () => void;
  rightClickHandler: () => void;
  totalDataCount: number;
  currentDataCount: number;
};

export const Pagination = ({
  leftClickHandler,
  rightClickHandler,
  totalDataCount,
  currentDataCount,
}: PaginationType) => {
  return (
    <div className="flex items-center text-black gap-x-3">
      <Button
        variant={'primary'}
        className="rounded-full hover:bg-neutral-700 bg-neutral-600"
        onClick={leftClickHandler}
        disabled={currentDataCount <= 2}
      >
        <Icon icon={AiOutlineDoubleLeft} className="inline-block mr-2" />
        Prev
      </Button>

      <Button
        variant={'primary'}
        className="rounded-full hover:bg-neutral-700 bg-neutral-600"
        onClick={rightClickHandler}
        disabled={currentDataCount >= totalDataCount}
      >
        Next
        <Icon icon={AiOutlineDoubleRight} className="inline-block ml-2" />
      </Button>
    </div>
  );
};
