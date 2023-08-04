import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';
import { IconType } from 'react-icons';
import { Icon } from '@/Atom/Icon';
import classNames from 'classnames';

interface ISearchbar {
  placeholder: string;
  leftIcon?: IconType;
  rightIcon?: IconType;
  onclickHandler: () => void;
  wrapperClass: string;
}

export const Searchbar: FC<ISearchbar> = ({
  placeholder,
  leftIcon,
  rightIcon,
  onclickHandler,
  wrapperClass,
}) => {
  const SearchIcon = leftIcon ?? rightIcon;

  return (
    <div
      className={classNames(
        'flex items-center bg-white rounded-lg overflow-hidden',
        wrapperClass,
      )}
    >
      {leftIcon && (
        <Icon
          icon={leftIcon}
          title="search"
          className="inline-block w-5 h-full p-0.5 cursor-pointer"
          onClick={onclickHandler}
        />
      )}

      <input
        type="text"
        className="px-3 py-[6px] rounded-lg md:w-[100px] lg:w-[300px] outline-none"
        placeholder={placeholder}
      />

      {rightIcon && (
        <Icon
          icon={rightIcon}
          onClick={onclickHandler}
          title="search"
          className="mx-2 cursor-pointer"
        />
      )}
    </div>
  );
};
