import OurProjectItem from './OurProjectItem';

const OurProjects = () => {
  return (
    <div className='mx-auto bg-white flex flex-col items-start gap-5 mt-20'>
      <div className='mx-auto h-10 text-center text-zinc-900 text-[42px] font-bold leading-[48px] mt-4'>
        Mūsų darbai
      </div>
      <div className='mx-auto h-[23.31px] text-center text-zinc-600 text-lg font-normal leading-7'>
        Lorem ipsum dolor sit amet, consectetur adipis elit
      </div>
      <div className='mx-auto m-[133px] flex flex-wrap justify-center gap-x-3 gap-y-12'>
        <OurProjectItem />
        <OurProjectItem />
        <OurProjectItem />
        <OurProjectItem />
        <OurProjectItem />
        <OurProjectItem />
      </div>
    </div>
  );
};
export default OurProjects;
