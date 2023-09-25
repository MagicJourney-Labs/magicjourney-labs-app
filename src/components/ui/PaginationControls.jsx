'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
  dataLength,
  perPage,
  blogsPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';
  const per_page = searchParams.get('per_page') || perPage;
  const { paginationTextPage, paginationTextOf } = blogsPage;

  return (
    <div className='flex justify-center items-center gap-20 border-t-2 pt-5 text-gray-600'>
      <button
        className=' text-3xl p-1 hover:text-black'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blogs?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        🡠
      </button>
      <div className='flex gap-1'>
        <span>{paginationTextPage}</span>
        <span className='font-bold'>{page}</span>
        <span>{paginationTextOf}</span>
        <span className='font-bold'>
          {Math.ceil(dataLength / Number(per_page))}
        </span>
      </div>

      <button
        className='text-3xl p-1 hover:text-black'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blogs?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        🡢
      </button>
    </div>
  );
};

export default PaginationControls;
