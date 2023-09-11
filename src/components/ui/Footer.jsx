import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterColumn from './FooterColumn';

export default async function Footer({ data }) {
  const { footerInfo, copyright, socialMediaIcon, footerColumn } = data;
  return (
    <footer className='flex  xl:flex  flex-col  self-stretch '>
      <div className=' sm:px-8 md:px-8 lg:px-8 w-fit'>
        <section className='  xl:flex  pt-16 pb-12 flex-col  gap-16 self-stretch border-t-2 border-t-gray-400'>
          <div className='flex  px-8 flex-col items-start gap-12'>
            <div className='flex-col sm:flex-col md:flex-col md:w-full lg:flex-row xl:flex-row flex items-start lg:gap-16 gap-24 self-stretch  '>
              <div className=' flex  flex-col items-start '>
                <div className='flex flex-row items-center '>
                  <Image
                    src={`${footerInfo.image.url}`}
                    alt='logo'
                    width='60'
                    height='60'
                  />{' '}
                  <h5>{footerInfo.name}</h5>
                </div>
                <p>{footerInfo.description}</p>
              </div>
              <div className=' grid grid-cols-2 grid-row-3 items-start gap-6 sm:flex sm:gap-6 md:flex md:gap-10 lg:flex lg:gap-6 xl:flex xl:gap-12 '>
                {footerColumn.map((column) => (
                  <FooterColumn data={column} key='footerColumn' />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className=' flex-col items-center  px-8 flex pb-12 py-16 gap-16 justify-between sm:flex-row md:flex-row lg:flex-row border-t-2 border-t-gray-400'>
          <div className=' '>
            <p>{copyright.text}</p>
          </div>
          <div className=' flex items-center gap-6 '>
            {socialMediaIcon.map((icon) => (
              <Link
                key={icon.url}
                href={`${icon.url}`}
                className='text-neutral-800 dark:text-neutral-200'
              >
                {icon.image.url && (
                  <Image
                    src={`${icon.image.url}`}
                    width={30}
                    height={30}
                    alt=''
                  />
                )}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
