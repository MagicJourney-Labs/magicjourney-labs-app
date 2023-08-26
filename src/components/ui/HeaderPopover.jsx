'use client'

import { Popover } from '@headlessui/react';
import Link from 'next/link';

const data = [
  {
    href: '#',
    title: 'Pradžia',
    id: 1
  },
  {
    href: '#',
    title: 'Mūsų darbai',
    id: 2
  },
  {
    href: '#',
    title: 'Paslaugos',
    id: 3
  },
  {
    href: '#',
    title: 'Naujienos',
    id: 4
  },
  {
    href: '#',
    title: 'Kontaktai',
    id: 5
  }
]

const HeaderPopover = () => {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      {data.map(link => (
        <Link key={link.id} href={link.href} className="text-sm font-semibold leading-6 text-gray-900">
          {link.title}
        </Link>  
      ))}
  </Popover.Group>
  )
}

export default HeaderPopover;