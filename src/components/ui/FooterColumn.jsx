import React from 'react';
import Link from 'next/link';

const FooterColumn = async ({ data: column }) => {
  return (
    <div className='flex flex-col items-start gap-4'>
      <h6 className='uppercase text-[14px] font-semibold leading-6 text-gray-900'>{column.title}</h6>
      <div className='flex flex-col items-start gap-3 self-stretch'>
        {column.links.map((link) => {
          return (
            <p key={link.id} className=''>
              <Link href={`${link.page ? link.page.slug : '#'}`} className='text-gray-600 dark:text-neutral-200'>
                {link.name}
              </Link>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default FooterColumn;
