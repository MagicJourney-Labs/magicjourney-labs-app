import OurProjectItem from './OurProjectItem';

const OurProjects = () => {
  return (
    <div className='container mx-auto bg-white flex flex-col items-start gap-5'>
      <div className='mx-auto h-10 text-center text-zinc-900 text-[42px] font-bold leading-[48px]'>
        Mūsų darbai
      </div>
      <div className='mx-auto h-[23.31px] text-center text-zinc-600 text-lg font-normal leading-7'>
        Lorem ipsum dolor sit amet, consectetur adipis elit
      </div>
      <div className='container mx-auto bg-white flex flex-col items-start gap-5'>
        <OurProjectItem />
      </div>
    </div>
  );
};
export default OurProjects;
