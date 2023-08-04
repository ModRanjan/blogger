export const Loading = () => {
  return (
    <div className="w-full max-w-3xl p-4 mx-auto border rounded-md shadow border-neutral-300">
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
