import { Button } from '@/design-system/Atom/Button';

export const Comment = () => {
  return (
    <section className="max-w-3xl mx-auto my-5">
      <h3 className="text-xl select-text">Comments</h3>

      <div className="flex items-center my-3 overflow-hidden border rounded-lg">
        <input
          type="text"
          className="flex-1 px-3 py-2 outline-none"
          placeholder="Give Your Valuable Comment"
        />
        <Button variant="primary" className="rounded-lg bg-neutral-500">
          Comment
        </Button>
      </div>
    </section>
  );
};
