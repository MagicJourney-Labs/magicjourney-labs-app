import Image from 'next/image';

const OurProjectItem = () => {
  return (
    <>
      <div className='w-11 h-9 flex flex-col items-start gap-3s px-4 py-3 rounded-full'>
        <div className='w-80 h-6 text-center text-zinc-900 text-xl font-bold leading-7'>
          Lorem ipsum
        </div>
        <div className='w-80 h-16 text-center text-zinc-600 text-base font-normal leading-relaxed'>
          Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
          proin faucibus nibh et sagittis a. Lacinia purus ac amet.
        </div>
      </div>
    </>
  );
};
export default OurProjectItem;
