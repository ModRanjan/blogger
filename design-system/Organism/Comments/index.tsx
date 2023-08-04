import { Button } from '@/Atom/Button';

import { Comment } from '@/Molecule/Comment';

export const Comments = ({
  commentHandler,
}: {
  commentHandler: () => void;
}) => {
  return (
    <div className="max-w-3xl mx-auto my-5">
      <h3 className="text-2xl section-title">Comments</h3>
      <Comment />

      <div className="flex items-center my-3 overflow-hidden border rounded-lg">
        <input
          type="text"
          className="flex-1 px-3 py-2 outline-none"
          placeholder="Give Your Valuable Comment"
        />

        <Button
          variant="primary"
          className="rounded-lg bg-neutral-600 hover:bg-neutral-700"
          onClick={commentHandler}
        >
          Comment
        </Button>
      </div>
    </div>
  );
};
