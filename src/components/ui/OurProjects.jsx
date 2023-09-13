import OurProjectItem from './OurProjectItem';

const OurProjects = async ({
  data: { ourProjectsHeader, ourProjectItems },
}) => {
  const { title, slagon } = ourProjectsHeader;
  return (
    <div className='mx-auto bg-white flex flex-col content-center gap-4 mt-20'>
      <div className='mx-auto h-10 text-center text-zinc-900 text-[2.62rem] font-bold leading-10 mt-4'>
        {title}
      </div>
      <div className='mx-auto h-5 text-center text-zinc-600 text-lg font-normal leading-7'>
        {slagon}
      </div>
      <div className='bg-gray-500 mt-16 mb-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[1px]'>
        {ourProjectItems.map((item) => {
          return <OurProjectItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
export default OurProjects;
