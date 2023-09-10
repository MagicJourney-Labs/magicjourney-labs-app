import Image from 'next/image';

const OurProjectItem = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='w-80 h-6 text-center text-zinc-900 text-xl font-bold leading-7'>
        Lorem ipsum
      </div>
      <div className='w-80 h-16 text-left text-zinc-600 text-base font-normal leading-relaxed'>
        Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin
        faucibus nibh et sagittis a. Lacinia purus ac amet.
      </div>
    </div>
  );
};
export default OurProjectItem;
