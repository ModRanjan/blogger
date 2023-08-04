'use client';

import { Button } from '@/design-system/Atom/Button';

export const CreateBlogPost = () => {
  return (
    <div className="max-w-3xl px-4 mx-auto -mt-6">
      <form onSubmit={() => console.log('blog-submitted')}>
        <div className="flex flex-col gap-1 mb-3">
          <label className="text-xs font-semibold uppercase text-neutral-600">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter Blog-title "
            className="px-3 py-[6px] outline-blue-400 rounded"
          />
        </div>

        <div className="flex items-center gap-1 mb-3 h-7">
          <label className="text-xs font-semibold uppercase text-neutral-600">
            Choose Blog Banner
          </label>
          <input
            type="file"
            placeholder="Start Writing Blog "
            className="px-3 border-none rounded outline-blue-400"
          />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label className="text-xs font-semibold uppercase text-neutral-600">
            Blog Description
          </label>
          <textarea
            placeholder="Start Writing Blog "
            rows={3}
            className="px-3 py-[6px] outline-blue-400 rounded"
          />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label className="text-xs font-semibold uppercase text-neutral-600">
            Blog Content
          </label>
          <textarea
            placeholder="Start Writing Blog "
            rows={5}
            className="px-3 py-[6px] outline-blue-400 rounded"
          />
        </div>

        <div className="flex flex-col gap-1 mb-3">
          <label className="text-xs font-semibold text-neutral-600">
            <span className="uppercase">Add Tags</span>{' '}
            <span className="ml-2 ">max 3</span>
          </label>
          <input
            type="text"
            placeholder="tag"
            className="px-3 py-[6px] outline-blue-400 rounded"
          />
        </div>

        <Button fullWidth className="mt-5 rounded-lg">
          Post
        </Button>
      </form>
    </div>
  );
};
