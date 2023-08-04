'use client';
import { Button } from '@/design-system/Atom/Button';
import { Icon } from '@/design-system/Atom/Icon';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

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
    <div className="text-black">
      <Button
        variant={'primary'}
        className="rounded-full hover:bg-neutral-700 bg-neutral-500"
        onClick={leftClickHandler}
        disabled={currentDataCount <= 2}
      >
        <Icon icon={AiOutlineDoubleLeft} className="inline-block mr-2" />
        Prev
      </Button>

      <Button
        variant={'primary'}
        className="rounded-full hover:bg-neutral-700 bg-neutral-500"
        onClick={rightClickHandler}
        disabled={currentDataCount >= totalDataCount}
      >
        Next
        <Icon icon={AiOutlineDoubleRight} className="inline-block ml-2" />
      </Button>
    </div>
  );
};
