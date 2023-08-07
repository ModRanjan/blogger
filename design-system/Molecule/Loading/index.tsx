import classNames from 'classnames';

type LoadingType = {
  maxWidth: string;
  border?: boolean;
};

export const Loading = ({ maxWidth, border }: LoadingType) => {
  return (
    <div
      className={classNames(
        'w-full p-4 mx-auto  rounded-md',
        maxWidth,
        border ? 'border border-neutral-300 shadow' : null,
      )}
    >
      <div className="flex flex-col space-x-4 animate-pulse">
        <div className="w-full h-9 bg-neutral-400"></div>
        <div className="flex-1 py-1 space-y-4">
          <div className="w-full my-5 rounded h-60 bg-neutral-400"></div>
          <div className="w-full h-4 rounded bg-neutral-400"></div>
          <div className="w-full h-4 rounded bg-neutral-400"></div>
          <div className="w-full h-4 rounded bg-neutral-400"></div>
          <div className="w-full h-4 rounded bg-neutral-400"></div>
          <div className="w-full h-4 rounded bg-neutral-400"></div>
          <div className="space-y-2">
            <div className="h-4 rounded bg-neutral-400"></div>
            <div className="w-5/6 h-4 rounded bg-neutral-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogsLoading = ({ maxWidth }: LoadingType) => {
  return (
    <div className={classNames('mx-auto', maxWidth)}>
      <div className="flex flex-col py-2 rounded animate-pulse">
        <div className="flex items-center gap-x-4 ">
          <div className="flex items-center gap-x-2">
            <div className="rounded-full bg-neutral-400 w-9 h-9" />
            <div className="h-8 w-28 bg-neutral-400" />
          </div>

          <div className="w-20 h-7 bg-neutral-400" />
        </div>

        <div className="flex mt-2 md:gap-x-4 gap-x-2">
          <div className="flex-1 max-w-5xl space-y-3">
            <div className="w-3/5 rounded h-9 bg-neutral-400"> </div>

            <div className="hidden w-full h-20 mt-3 rounded md:inline-block bg-neutral-400" />
          </div>

          <div className="w-32 h-32 rounded bg-neutral-400"></div>
        </div>

        <div className="flex gap-x-3">
          <div className="w-32 h-6 mt-3 rounded bg-neutral-400" />
          <div className="w-20 h-6 mt-3 rounded bg-neutral-400" />
          <div className="w-24 h-6 mt-3 rounded bg-neutral-400" />
        </div>
      </div>

      <div className="flex flex-col py-2 mt-5 rounded ">
        <div className="flex items-center gap-x-4 ">
          <div className="flex items-center gap-x-2">
            <div className="rounded-full bg-neutral-400 w-9 h-9" />
            <div className="h-8 w-28 bg-neutral-400" />
          </div>

          <div className="w-20 h-7 bg-neutral-400" />
        </div>

        <div className="flex mt-2 md:gap-x-4 gap-x-2">
          <div className="flex-1 max-w-5xl space-y-3">
            <div className="w-3/5 rounded h-9 bg-neutral-400"> </div>

            <div className="hidden w-full h-20 mt-3 rounded md:inline-block bg-neutral-400" />
          </div>

          <div className="w-32 h-32 rounded bg-neutral-400"></div>
        </div>

        <div className="flex gap-x-3">
          <div className="w-32 h-6 mt-3 rounded bg-neutral-400" />
          <div className="w-20 h-6 mt-3 rounded bg-neutral-400" />
          <div className="w-24 h-6 mt-3 rounded bg-neutral-400" />
        </div>
      </div>
    </div>
  );
};
