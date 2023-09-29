'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import React from 'react';

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
  dataLength,
  perPage,
  pagination,
  slug,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';
  const per_page = searchParams.get('per_page') || perPage;
  const pageCount = Math.ceil(dataLength / Number(per_page));
  const currentPage = Number(page);

  const pagesToShow = 3;

  const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(pageCount, startPage + pagesToShow - 1);

  return (
    <div className='flex justify-around md:justify-between items-center  border-t-2 pt-5 text-gray-500 text-xl'>
      <button
        className=' p-1 hover:text-black flex gap-2'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/${slug}?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        <span>🡠</span>
        <span className='hidden md:block '>{pagination.textPrevious}</span>
      </button>

      <div className='flex md:hidden gap-1'>
        <span>{pagination.textPage}</span>
        <span className='font-bold'>{page}</span>
        <span>{pagination.textOf}</span>
        <span className='font-bold'>{pageCount}</span>
      </div>

      <div className='hidden md:flex items-center gap-1'>
        {currentPage > 2 && (
          <>
            <Link
              key={0}
              className={`py-1 px-3 rounded-sm text-gray-500 no-underline`}
              href={`/${slug}?page=1&per_page=${per_page}`}
            >
              1
            </Link>
            {currentPage > 3 && pageCount >= 4 && (
              <span className='text-gray-500'>...</span>
            )}
          </>
        )}

        {Array.from({ length: pageCount }, (_, i) => {
          const pageNumber = i + 1;

          if (pageNumber >= startPage && pageNumber <= endPage) {
            const isCurrentPage = pageNumber === currentPage;

            return (
              <Link
                key={`page-${pageNumber}`}
                className={`py-1 px-3 rounded-sm text-gray-500 no-underline ${
                  isCurrentPage ? 'text-purple-600 bg-purple-100' : ''
                }`}
                href={`/${slug}?page=${pageNumber}&per_page=${per_page}`}
              >
                {pageNumber}
              </Link>
            );
          }

          return null;
        })}

        {currentPage < pageCount - 2 && pageCount > 4 && (
          <>
            <span className='text-gray-500'>...</span>
            <Link
              key={pageCount}
              className={`py-1 px-3 rounded-sm text-gray-500 no-underline`}
              href={`/${slug}?page=${pageCount}&per_page=${per_page}`}
            >
              {pageCount}
            </Link>
          </>
        )}

        {(currentPage === pageCount - 2 ||
          (pageCount === 4 && currentPage === 1)) &&
          pageCount > 3 && (
            <Link
              key={pageCount}
              className={`py-1 px-3 rounded-sm text-gray-500 no-underline`}
              href={`/${slug}?page=${pageCount}&per_page=${per_page}`}
            >
              {pageCount}
            </Link>
          )}
      </div>

      <button
        className='p-1 hover:text-black flex gap-2'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/${slug}?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        <span className='hidden md:block '>{pagination.textNext}</span>
        <span> 🡢</span>
      </button>
    </div>
  );
};

export default PaginationControls;
