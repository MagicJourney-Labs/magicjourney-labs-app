'use client'

import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useMobileMenuContext } from '../../app/HeaderContext';

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

const HeaderDialog = () => {
  const { mobileMenu, closeMobileMenu } = useMobileMenuContext();

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenu} onClose={closeMobileMenu}>
    <div className="fixed inset-0 z-10" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <Image 
            src="/mjl-logo_sq.png"
            alt="logo"
            width="40"
            height="40"
          />
        </Link>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={closeMobileMenu}
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            {data.map(link => (
              <Link
                key={link.id}
                href={link.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
              {link.title}
              </Link>
            ))}
          </div>
          <div className="py-6">
            <Link
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Prisijungti
            </Link>
          </div>
        </div>
      </div>
    </Dialog.Panel>
  </Dialog>
  )
}

export default HeaderDialog;