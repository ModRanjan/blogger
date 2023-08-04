import { useRouter } from 'next/navigation';
import classNames from 'classnames';
import Link from 'next/link';

import { NavItems } from '@/Constants/NavItems';

export const Navigation = ({ className, ...props }: { className: string }) => {
  const Router = useRouter();

  return (
    <nav
      className={classNames(
        'flex flex-col md:flex-row md:items-center md:space-x-4 lg:space-x-6',
        className,
      )}
      {...props}
    >
      {NavItems.map((item) => {
        // we can pu logic of active element here
        const active = false;

        return (
          <Link
            key={item.name}
            href={item.url}
            className={`text-sm py-3 px-6 md:p-0 h-11 md:h-auto font-medium transition-colors ${
              active
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
