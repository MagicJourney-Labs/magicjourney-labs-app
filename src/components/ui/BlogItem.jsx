import Image from 'next/image';

const BlogItem = ({ blog, styleLatest, index }) => {
  const latestStyle = styleLatest && index !== 0;
  return (
    <div className={`flex ${latestStyle ? 'flex-row' : 'flex-col'} gap-6`}>
      <Image
        className='m-0'
        src={blog.photo.url}
        alt={blog.photo.fileName}
        width={blog.photo.width}
        height={blog.photo.height}
        style={{ maxHeight: `200px`, objectFit: 'cover' }}
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />

      <div className=''>
        <div className='flex gap-1 text-purple-700'>
          <span>{blog.author}</span>
          <span>•</span>
          <span>
            {new Date(blog.createdDate).toLocaleDateString('lt-LT', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        <div className='flex justify-between'>
          <h3 className='text-2xl'>{blog.title}</h3>
          {!latestStyle && <span className='font-bold'>↗</span>}
        </div>
        <p className='line-clamp-3'>{blog.content.text}</p>
      </div>
    </div>
  );
};
export default BlogItem;
