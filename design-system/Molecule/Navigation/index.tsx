import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import Link from 'next/link';

import { NavItems } from '@/Constants/NavItems';

export const Navigation = ({ className, ...props }: { className: string }) => {
  const pathname = usePathname();

  return (
    <nav
      className={classNames(
        'flex flex-col md:flex-row md:items-center md:space-x-4 lg:space-x-6',
        className,
      )}
      {...props}
    >
      {NavItems.map((item) => {
        return (
          <Link
            key={item.name}
            href={item.url}
            className={classNames(
              'py-3 px-6 md:p-0  md:h-auto font-medium transition-colors',
              pathname === item.url
                ? 'text-primary'
                : 'text-neutral-500 hover:text-primary',
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
