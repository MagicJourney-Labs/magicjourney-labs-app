import Image from 'next/image';

const BlogItem = ({ blog }) => {
  return (
    <>
      {' '}
      <Image
        src={blog.photo.url}
        alt={blog.photo.fileName}
        width={blog.photo.width}
        height={blog.photo.height}
        style={{ maxHeight: '200px', objectFit: 'cover' }}
        sizes='sizes="(min-width: 1480px) 419px, (min-width: 1040px) 28.57vw, (min-width: 780px) calc(50vw - 52px), calc(100vw - 64px'
      />
      <div className='flex gap-1 items-center text-purple-700'>
        <span>{blog.author}</span>
        <span className='text-2xl'>&middot;</span>
        <span>
          {new Date(blog.createdDate).toLocaleDateString('lt-LT', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
      <h3 className='text-2xl'>{blog.title}</h3>
      <p>{blog.content.text}</p>
    </>
  );
};
export default BlogItem;
