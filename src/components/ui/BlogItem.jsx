import Image from 'next/image';

const BlogItem = ({ blog, styleLatest, index }) => {
  const latestStyle = styleLatest && index !== 0;
  return (
    <div
      className={`flex  ${
        latestStyle ? 'flex-row' : 'grid content-between justify-items-center'
      } gap-6 `}
    >
      <Image
        className='m-0'
        src={blog.photo.url}
        alt={blog.photo.fileName}
        width={blog.photo.width}
        height={blog.photo.height}
        style={
          latestStyle
            ? {
                height: `200px`,
                width: '50%',
                objectFit: 'cover',
              }
            : { maxHeight: `200px`, objectFit: 'cover' }
        }
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />

      <div className={`${latestStyle && 'w-1/2'}`}>
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
        <p className='m-0 line-clamp-3'>{blog.content.text}</p>
      </div>
    </div>
  );
};
export default BlogItem;
