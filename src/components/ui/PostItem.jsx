const Post = ({ data: post }) => {
  const date = new Date(post.createdAt).toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className=' group relative flex flex-col items-start '>
      <div className='hover:bg-slate-100 w-full md:w-1/2  rounded-lg p-4 cursor-pointer'>
        <div>
          <span className='text-sm underline underline-offset-8  decoration-slate-800 decoration-2'> {date}</span>
        </div>
        <div className='pt-4'>
          <h2 className='font-bold'>{post.title}</h2>
          <p className=' text-justify pt-3 text-xs sm:text-base'>{post.content.text}</p>
          <div className='flex items-center pt-3'>
            <button className='text-grey-500 font-bold '>Skaityti straipsnį</button>
            <div
              className='ml-3 w-0 h-0 
  border-t-[7px] border-t-transparent
  border-l-[13px] border-l-slate-800
  border-b-[7px] border-b-transparent'
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
