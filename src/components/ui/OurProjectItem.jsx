import Image from 'next/image';

const OurProjectItem = ({ data }) => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex justify-center mb-[3rem]'>
        <Image src={data.icon.url} width='44' height='36' alt='icon' />
      </div>
      <div className='w-80 h-6 text-center text-zinc-900 text-xl font-bold leading-7'>
        {data.title}
      </div>
      <div className='w-80 h-16 text-center text-zinc-600 text-base font-normal leading-relaxed'>
        {data.content}
      </div>
    </div>
  );
};
export default OurProjectItem;
