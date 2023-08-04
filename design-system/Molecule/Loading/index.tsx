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
