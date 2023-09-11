'use client';

import { Bars3Icon } from '@heroicons/react/24/outline';
import { useMobileMenuContext } from './MobileMenuProvider';

const HeaderMobileButton = () => {
  const { openMobileMenu } = useMobileMenuContext();

  return (
    <div className='flex lg:hidden'>
      <button
        type='button'
        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
        onClick={openMobileMenu}
      >
        <span className='sr-only'>Open main menu</span>
        <Bars3Icon className='h-6 w-6' aria-hidden='true' />
      </button>
    </div>
  );
};

export default HeaderMobileButton;
