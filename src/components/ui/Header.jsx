import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import HeaderPopover from './HeaderPopover';
import HeaderDialog from './HeaderDialog';
import HeaderMobileButton from './HeaderMobileButton';
import HeaderLanguageIcon from './HeaderLanguageIcon';

function Header({ data }) {
  const { headerLogo, headerLinks, headerLogIn } = data;

  return (
    <header className='bg-white sticky top-0 z-50 shadow-[0_2px_4px_rgba(0,0,0,0.15)]'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>{headerLogo.name}</span>
            <Image
              src={`${headerLogo.logo.url}`}
              alt='logo'
              width='40'
              height='40'
            />
          </Link>
        </div>

        {headerLinks.map((data) => (
          <HeaderPopover key={data.id} links={data.links} />
        ))}

        <div className='flex flex-row items-center gap-4'>
          <HeaderLanguageIcon />

          <HeaderMobileButton />

          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Link href='#' className='text-sm font-semibold leading-6 text-gray-900'>
              <Button>{headerLogIn.name}</Button>
            </Link>
          </div>
        </div>
      </nav>

      <HeaderDialog data={data} />
    </header>
  );
}

export default Header;
