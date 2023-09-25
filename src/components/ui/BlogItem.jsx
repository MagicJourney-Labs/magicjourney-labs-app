import { format } from 'date-fns';
import lt from 'date-fns/locale/lt';
import Image from 'next/image';
import Link from 'next/link';
import { shuffleArray } from './ShuffleArray';

const BlogItem = ({ blog, styleLatest, index }) => {
  const latestStyle = styleLatest && index !== 0;
  const firstFromRecent = styleLatest && index === 0;
  const categoryColors = [
    'text-blue-600 bg-blue-100',
    'text-red-600 bg-red-100 ',
    'text-green-600 bg-green-100',
    'text-yellow-600 bg-yellow-100',
    'text-purple-600 bg-purple-100',
    'text-pink-600 bg-pink-100',
    'text-indigo-600 bg-indigo-100',
    'text-teal-600 bg-teal-100',
    'text-orange-600 bg-orange-100',
    'text-gray-600 bg-gray-100',
  ];
  const shuffledCategoryColors = shuffleArray(categoryColors);
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
        width={684}
        height={456}
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />
      <Image
        className='hidden md:block m-0'
        src={blog.photo.url}
        alt={blog.photo.fileName}
        width={latestStyle ? 300 : firstFromRecent ? 1000 : 429}
        height={firstFromRecent ? 250 : 200}
        style={{
          maxHeight: firstFromRecent ? '250px' : `200px`,
          width: latestStyle ? '300px' : '',
          objectFit: 'cover',
        }}
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />

      <div className={`${latestStyle && 'w-full md:w-1/2'} w-full`}>
        <div className='flex gap-x-1 items-center text-purple-700'>
          <span>{blog.author}</span>
          <span>•</span>
          <span className=' whitespace-nowrap'>
            {format(new Date(blog.createdDate), ' d MMM  Y', { locale: lt })}
          </span>
        </div>
        <div className='flex justify-between mt-5'>
          <h3 className='text-2xl m-0'>{blog.title}</h3>
          <span className='font-bold'>↗</span>
        </div>
        <p className='m-0 line-clamp-3 text-gray-500'>{blog.content.text}</p>
        <div className='flex flex-wrap gap-3 pl-2 my-5'>
          {' '}
          {blog.blogCategories?.length !== 0 &&
            blog.blogCategories.map((category, index) => {
              const colorClass =
                shuffledCategoryColors[index % shuffledCategoryColors.length];
              return (
                <p
                  key={index}
                  className={`px-2 m-0 rounded-full  ${colorClass}`}
                >
                  {category}
                </p>
              );
            })}
        </div>
      </div>
    </Link>
  );
};
export default BlogItem;
