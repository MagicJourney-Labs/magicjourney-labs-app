import OurProjectItem from './OurProjectItem';
import { fetchGraphQL } from '@/lib/graphqlUtils';
import { ourProjectItem } from '@/queries/ourProjectItem';
import { ourProjects } from '@/queries/ourProjects';

const OurProjects = async () => {
  const { ourProject } = await fetchGraphQL(ourProjects);
  const { ourProjectItems } = await fetchGraphQL(ourProjectItem);
  const { title, slogan } = ourProject[0];
  return (
    <div className='mx-auto bg-white flex flex-col items-start gap-4 mt-20'>
      <div className='mx-auto h-10 text-center text-zinc-900 text-[2.62rem] font-bold leading-10 mt-4'>
        {title}
      </div>
      <div className='mx-auto h-5 text-center text-zinc-600 text-lg font-normal leading-7'>
        {slogan.text}
      </div>
      <div className='mx-auto mt-12 mb-[8rem] flex flex-wrap justify-center gap-x-5 gap-y-12'>
        {ourProjectItems.map((item) => {
          return <OurProjectItem key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
};
export default OurProjects;
