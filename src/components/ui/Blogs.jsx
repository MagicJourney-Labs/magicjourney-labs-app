import BlogItem from '@/components/ui/BlogItem';
import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import { allBlogs } from '@/queries/blogs';
import { blogsPage } from '@/queries/pages';

const Blogs = async () => {
  const { page } = await fetchGraphQL(blogsPage);
  const { blogsConnection } = await fetchGraphQL(allBlogs, {
    next: { tags: ['blogs'] },
  });
  const { chapterTextForAllBlogs, chapterTextForLatest, paginationText } =
    page.components;
  const blogs = blogsConnection.edges;

  const latestBlogPosts = blogs.slice(0, 3);

  return (
    <div className='pb-16 lg:pb-20'>
      <div className='prose max-w-none pt-10 pb-8'>
        <div className='container mx-auto flex flex-col gap-10'>
          <div>
            <h2 className=''>{chapterTextForLatest}</h2>
            <div className='grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-2 gap-6'>
              {latestBlogPosts.map((blog, index) => (
                <div
                  className={` ${
                    index === 0
                      ? ' md:row-span-2'
                      : ' lg:col-span-2 xl:col-span-1'
                  }`}
                  key={blog.node.id}
                >
                  <BlogItem blog={blog.node} styleLatest={true} index={index} />
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-col'>
            <h2 className=''>{chapterTextForAllBlogs}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {blogs.map((blog) => (
                <BlogItem key={blog.node.id} blog={blog.node} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
{
  /* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sunt unde iste ipsum eligendi nostrum. Delectus ullam illo quidem eligendi hic perspiciatis, quaerat aspernatur numquam commodi sed non sint ipsa, modi eaque doloribus, reiciendis nihil animi atque assumenda odit natus facere laudantium illum! Eveniet unde aliquid voluptate dolore ipsam facere minima ratione voluptatum, culpa labore totam, perspiciatis ut vero quidem corporis, iste odio. Tenetur necessitatibus qui aperiam rem iure alias animi consectetur sed a debitis cupiditate quis fuga soluta velit sunt dolores, veniam quo distinctio ad ipsum accusantium libero amet natus impedit! Voluptatum repellendus distinctio fuga non et tempora! Inventore suscipit sed quisquam magnam, commodi ea recusandae quaerat, perspiciatis eaque quod laudantium atque est culpa modi eveniet blanditiis, numquam quibusdam tenetur cum illum dolorem dicta iusto eum reiciendis. Modi velit sed quasi facilis soluta unde! Aliquam ipsum suscipit illo vitae quisquam voluptatum et velit itaque dolor officiis placeat reiciendis doloribus delectus molestias quod ducimus exercitationem numquam nemo, at nihil, labore incidunt eligendi. Ipsam ut eos nesciunt voluptas qui suscipit, eaque esse facere odio commodi, in officiis cum sequi quasi nulla odit illo dicta laborum sunt expedita non alias, voluptatibus aperiam? Ad dolorum saepe iste eligendi enim. Doloremque vitae ipsam vel delectus debitis quo! Qui provident voluptas repudiandae! Officiis nam est vitae tempore quidem atque! Cum reiciendis quos dignissimos tempore dolor minus! Cum quibusdam eum tempora, alias nostrum a minima at dolorem animi neque nisi commodi sed nobis iure velit ea? Dolorem rem exercitationem distinctio aspernatur fuga blanditiis soluta ullam esse, ex natus delectus ipsam consequuntur corrupti ipsum enim ut culpa debitis error beatae voluptatum praesentium necessitatibus quas quisquam. Magnam odit ratione aliquam eaque voluptates ipsam nobis at eligendi, aspernatur recusandae natus voluptatem, perspiciatis fugit laudantium? Magnam ducimus magni vitae deserunt facilis praesentium sint quas nobis, omnis, doloribus exercitationem similique enim temporibus aspernatur ex eaque quisquam assumenda soluta totam blanditiis fugit quibusdam. Rerum veniam, ea commodi itaque id iure similique accusantium! Cum minus quos quaerat! Tenetur ullam itaque non vero! Quaerat vitae eius officiis nostrum cumque illum, culpa doloremque reiciendis dolorum at dolorem eligendi pariatur optio nemo placeat hic ut quas delectus provident a autem blanditiis rem molestias. Provident, obcaecati reprehenderit accusantium consequuntur doloremque nulla corporis ipsum, laborum culpa voluptas ab aliquid distinctio. Ipsam, perferendis sed. Fuga, temporibus reprehenderit sapiente ducimus odio animi quidem eveniet explicabo. Necessitatibus, id vero labore impedit dolores eius temporibus molestias delectus rerum dolore quia quis minus molestiae quasi facilis voluptatibus accusamus repudiandae ab nisi perferendis porro? Cupiditate suscipit aliquam a ad, magni quam. Minus nemo accusantium temporibus, obcaecati, reprehenderit deleniti voluptatem debitis quod odio vel labore, quis in. Eum consequatur optio exercitationem, molestias ex minima vero perspiciatis veniam, officiis mollitia velit totam. Pariatur, quisquam debitis asperiores vitae autem, est quo laudantium, dolorum eos veritatis deleniti reprehenderit aut dicta voluptatem odio ducimus libero laboriosam. Quos placeat quod consequatur commodi itaque mollitia iusto debitis amet accusantium odio animi quasi quaerat accusamus veritatis et sunt sequi perspiciatis, dolor tenetur. Dolor dolorum mollitia, officiis fugit quidem possimus accusantium aliquam commodi.</p> */
}
