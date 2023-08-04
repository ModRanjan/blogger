export const Tag = ({ tag }: { tag: string }) => {
  return (
    <span className="px-2 py-1 mt-4 text-xs font-semibold text-white md:py-2 md:px-3 rounded-3xl bg-neutral-400">
      {tag}
    </span>
  );
};
