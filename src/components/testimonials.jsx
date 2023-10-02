import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import { allTestimonials } from '@/queries/testimonials';
import Image from 'next/image';
import Link from 'next/link';

const Testimonials = async () => {
  const { testimonials } = await fetchGraphQL(allTestimonials);
  const { title, subtitle, link, reviewers } = testimonials;
  return (
    <div className='pt-20 pb-20 bg-zinc-50'>
      <div className='px-10 flex flex-col items-center mx-auto max-w-7xl  lg:px-10 '>
        <h2 className='text-[30px] pb-6 sm:text-[36px] font-bold '>{title}</h2>
        <h3 className='mx-auto max-w-2xl text-center text-gray-900 text-lg font-normal leading-7 pb-6 sm:pb-20'>
          {subtitle}
        </h3>
        <div className='flex gap-12 pb-10'>
          {reviewers.map((reviewer) => (
            <div className='relative' key={reviewer.id}>
              <Image
                className='  rounded-2xl'
                src={reviewer.photo.url}
                alt='testimonial'
                width={300}
                height={600}
              />
              <div className='flex gap-2 justify-between items-center absolute bottom-7 left-8 w-[240px]'>
                <div className='  flex flex-col text-white'>
                  <span className='text-lg font-semibold '>
                    {reviewer.name}
                  </span>
                  <span className='text-sm font-normal'>{reviewer.place}</span>
                </div>
                <div className='bg-white rounded-2xl w-14 h-14'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link
        href={link.href}
        className='flex justify-center items-center gap-1 text-blue-600 font-semibold text-base'
      >
        <span>{link.name}</span>
        <Image src='/' width={20} height={20} alt='arrow'></Image>
      </Link>
    </div>
  );
};
export default Testimonials;
