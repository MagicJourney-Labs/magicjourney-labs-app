'use client';

import { Popover } from '@headlessui/react';
import Link from 'next/link';

const HeaderPopover = ({ links }) => {
  return (
    <Popover.Group className='hidden lg:flex lg:gap-x-12'>
      {links.map((link) => (
        <Link
          key={link.id}
          href={`${link.page ? link.page.slug : '#'}`}
          className='text-sm font-semibold leading-6 text-gray-900'
        >
          {link.name}
        </Link>
      ))}
    </Popover.Group>
  );
};

export default HeaderPopover;
