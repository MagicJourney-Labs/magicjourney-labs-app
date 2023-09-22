import Image from 'next/image';
import Link from 'next/link';

const BlogItem = ({ blog, styleLatest, index }) => {
  const latestStyle = styleLatest && index !== 0;
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className={`no-underline ${
        latestStyle
          ? 'flex flex-col md:flex-row items-center md:items-start'
          : 'grid content-between justify-items-center md:justify-items-start'
      } gap-6 `}
    >
      <Image
        className='md:hidden m-0'
        src={blog.photo.url}
        alt={blog.photo.fileName}
        width={blog.photo.width}
        height={blog.photo.height}
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />
      <Image
        className='hidden md:block m-0'
        src={blog.photo.url}
        alt={blog.photo.fileName}
        width={latestStyle ? 300 : blog.photo.width}
        height={blog.photo.height}
        style={{
          maxHeight: `200px`,
          width: latestStyle ? '300px' : '',
          objectFit: 'cover',
        }}
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />

      <div className={`${latestStyle && 'w-full md:w-1/2'}`}>
        <div className='flex gap-x-1 items-center text-purple-700'>
          <span>{blog.author}</span>
          <span>•</span>
          <span className=' whitespace-nowrap'>
            {new Date(blog.createdDate).toLocaleDateString('lt-LT', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <div className='flex justify-between mt-5'>
          <h3 className='text-2xl m-0'>{blog.title}</h3>
          {!latestStyle && <span className='font-bold'>↗</span>}
        </div>
        <p className='m-0 line-clamp-3 text-gray-500'>{blog.content.text}</p>
      </div>
    </Link>
  );
};
export default BlogItem;
