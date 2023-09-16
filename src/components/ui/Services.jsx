import Image from 'next/image';

const Services = async ({ data }) => {
  return (
    <div className='pt-20 pb-20 bg-zinc-50'>
      <div className='px-10 flex flex-col items-center mx-auto max-w-7xl  lg:px-10'>
        <h1 className='text-[30px] pb-6 sm:text-[36px] font-bold sm:pb-20'>{data.title}</h1>
        <div className='grid md:grid-cols-2  gap-x-24 gap-y-16 grid-cols-1 md:gap-y-10 md:gap-x-10 '>
          {data.services.map((service) => (
            <div key={service.id} className='group relative'>
              <div className='absolute -inset-x-0.5 bottom-1 translate-y-6 top-0 rounded-lg bg-gradient-to-r from-green-400/50 via-fuchsia-500/50 to-yellow-500/50 blur-[18px] '></div>
              <div className='border-zinc-200 rounded-lg bg-white  relative'>
                <div className='flex flex-row h-[fit] px-[20px] pt-10 pb-10 sm:px-[35px] sm:h-[250px] md:h-[450px] lg:h-[312px] '>
                  <Image className='h-[20px] w-[20px] sm:w-[30px] sm:h-[30px]' src={`${service.icon.url}`} width={30} height={30} alt='' />
                  <div className='flex flex-col pl-2 text-black'>
                    <h3 className='text-[16px] sm:text-[20px]'>{service.name}</h3>
                    <p className='text-[14px] sm:text-[18px]'>{service.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
