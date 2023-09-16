import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterColumn from './FooterColumn';

export default async function Footer({ data }) {
  const { footerInfo, copyright, socialMediaIcon, footerColumn } = data;
  return (
    <footer className='flex  xl:flex  flex-col  self-stretch items-center'>
      <section className='xl:flex  pt-16 pb-12 flex-col  self-stretch border-t-2 border-t-gray-400'>
        <div className='flex-col mx-auto px-8 max-w-7xl justify-between sm:flex-col md:flex-col md:w-full md:gap-8 lg:flex-row xl:flex-row flex items-start lg:gap-16 gap-24 self-stretch'>
          <div className=' flex  flex-col items-start '>
            <div className='flex flex-row items-center '>
              <Image src={`${footerInfo.image.url}`} alt='logo' width='60' height='60' /> <h5>{footerInfo.name}</h5>
            </div>
            <p className='text-gray-600'>{footerInfo.description}</p>
          </div>
          <div className=' grid grid-cols-2 grid-row-3 items-start gap-6 sm:flex sm:gap-6 md:flex md:gap-14 lg:flex lg:gap-12 xl:flex xl:gap-12 '>
            {footerColumn.map((column) => (
              <FooterColumn data={column} key='footerColumn' />
            ))}
          </div>
        </div>
      </section>
      <section className='xl:flex  pt-12 pb-12 flex-col self-stretch border-t-2 border-t-gray-400'>
        <div className=' mx-auto flex-col max-w-7xl px-8 justify-between sm:flex-row md:flex-row md:w-full lg:flex-row xl:flex-row flex items-start lg:gap-16 gap-8 self-stretch'>
          <div>
            <p className='text-gray-600'>{copyright.text}</p>
          </div>
          <div className='flex items-center gap-6'>
            {socialMediaIcon.map((icon) => (
              <Link key={icon.url} href={`${icon.url}`} className='text-neutral-800 dark:text-neutral-200'>
                {icon.image.url && <Image src={`${icon.image.url}`} width={30} height={30} alt='' />}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
