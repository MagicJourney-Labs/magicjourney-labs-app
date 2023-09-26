import Image from 'next/image';
import Link from 'next/link';
import DateUtils from '../../lib/utils/dateUtils';

const BlogItem = ({ blog, styleLatest, index }) => {
  const latestStyle = styleLatest && index !== 0;
  const firstFromRecent = styleLatest && index === 0;

  return (
    <Link
      href={`/blogs/#`}
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
        width={684}
        height={456}
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />
      <Image
        className='hidden md:block m-0'
        src={blog.photo.url}
        alt={blog.photo.fileName}
        width={latestStyle ? 300 : firstFromRecent ? 1000 : 430}
        height={latestStyle ? 210 : 230}
        style={{
          height: latestStyle ? '210px' : '230px',
          maxWidth: latestStyle ? '300px' : '',
          objectFit: 'cover',
        }}
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />

      <div className={`${latestStyle && 'w-full md:w-1/2'} w-full`}>
        <div className='flex gap-x-1 items-center text-purple-700 text-xs'>
          <span>{blog.author}</span>
          <span>•</span>
          <span className=' whitespace-nowrap'>
            {DateUtils.formatDate(blog.createdDate)}
          </span>
        </div>
        <div className='flex justify-between mt-3'>
          <h3 className='text-2xl m-0'>{blog.title}</h3>
          <span className='font-bold text-2xl'>🡥</span>
        </div>
        <p className='m-0 line-clamp-3 text-gray-500'>{blog.content.text}</p>
        <div className='flex flex-wrap gap-3 pl-2 mt-4'>
          {' '}
          {blog.blogCategories?.length !== 0 &&
            blog.blogCategories.map((category, index) => {
              console.log(blog.categoryColor?.hex);
              return (
                <p
                  key={index}
                  className={`px-2 m-0 rounded-full  bg-[${blog.categoryColor?.hex}]`}
                >
                  <span className='text-sm'>{category}</span>
                </p>
              );
            })}
        </div>
      </div>
    </Link>
  );
};
export default BlogItem;
