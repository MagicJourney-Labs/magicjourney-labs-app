import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/Button";

import Image from 'next/image';
import Link from 'next/link';
import HeaderPopover from './HeaderPopover';
import HeaderDialog from './HeaderDialog';
import HeaderMobileButton from './HeaderMobileButton';

function Header({ data }) {
  console.log(data)
  const { headerLogo, headerLink, headerLogIn } = data;

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{headerLogo.name}</span>
            <Image src={`${headerLogo.logo.url}`} alt="logo" width="40" height="40" />
          </Link>
        </div>

        <HeaderMobileButton />
        
        {headerLink.map(data => (
          <HeaderPopover data={data} />
        ))}
       
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Globe />
          <span>EN</span>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <Button>{headerLogIn.name}</Button>
          </Link>
        </div>
      </nav>

      {headerLink.map(data => (
        <HeaderDialog data={data} company={headerLogo} logIn={headerLogIn} />   
        ))}

    </header>
  )
}

export default Header;
