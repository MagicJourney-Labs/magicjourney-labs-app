'use client';
import { useRouter, useSearchParams } from 'next/navigation';

const PaginationControls = ({
  hasNextPage,
  hasPrevPage,
  dataLength,
  perPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') || '1';
  const per_page = searchParams.get('per_page') || perPage;

  return (
    <div className='flex justify-center items-center gap-10'>
      <button
        className=' text-3xl p-1'
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/blogs?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        ⇦
      </button>

      <div className='font-bold'>
        {page} / {Math.ceil(dataLength / Number(per_page))}
      </div>

      <button
        className='text-3xl p-1'
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/blogs?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        ⇨
      </button>
    </div>
  );
};

export default PaginationControls;
