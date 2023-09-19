'use client';

import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderPopover = ({ links }) => {
  const path = usePathname();

  function formatHrefTo(data) {
    if (data === '/') {
      return data;
    } else if (!data.startsWith('/')) {
      return `/${data}`;
    }
  }

  return (
    <Popover.Group className='hidden lg:flex lg:gap-x-12'>
      {links.map((link) => {
        const hrefTo = link.page ? link.page.slug : '/';
        const formatedHref = formatHrefTo(hrefTo);

        return (
          <Link
            key={link.id}
            href={formatedHref}
            className={`${path === formatedHref ? 'text-blue-800' : 'text-gray-900'} text-sm font-semibold leading-6 hover:text-blue-400`}
          >
            {link.name}
          </Link>
        );
      })}
    </Popover.Group>
  );
};

export default HeaderPopover;
