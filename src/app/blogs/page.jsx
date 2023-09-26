import BlogItem from '@/components/ui/BlogItem';
import PaginationControls from '@/components/ui/PaginationControls';
import { fetchGraphQL } from '@/lib/utils/graphqlUtils';
import { allBlogs } from '@/queries/blogs';

const Blogs = async ({ searchParams }) => {
  const { blogsPage } = await fetchGraphQL(allBlogs, {
    next: { tags: ['blogs'] },
  });

  const {
    chapterTextForAllBlogs,
    chapterTextForLatest,
    blogPosts,
    pagination,
  } = blogsPage;
  const latestBlogPosts = blogPosts.slice(0, 3);
  const perPage = 3;

  const page = searchParams['page'] || '1';
  const per_page = searchParams['per_page'] || perPage;

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = blogPosts.slice(start, end);
  return (
    <div className='divide-y divide-gray-200'>
      <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
        <h1 className='text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
          {blogsPage.title}
        </h1>
      </div>
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
                    key={blog.id}
                  >
                    <BlogItem blog={blog} styleLatest={true} index={index} />
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col'>
              <h2 className=''>{chapterTextForAllBlogs}</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {entries.map((blog) => (
                  <BlogItem key={blog.id} blog={blog} />
                ))}
              </div>
            </div>
            <PaginationControls
              hasNextPage={end < blogPosts.length}
              hasPrevPage={start > 0}
              dataLength={blogPosts.length}
              perPage={perPage}
              pagination={pagination}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;

{
  /* <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, at beatae.
  Repellendus rerum, quae eum dolorum eos ea in eaque, dignissimos perspiciatis,
  deserunt aut numquam sapiente? Et quod nihil porro maxime accusamus ipsa earum
  consequuntur, ducimus sint nulla quisquam! Amet dolorum ex fugiat, nemo
  expedita quidem sit veniam ratione pariatur voluptatibus quaerat eum adipisci
  soluta cum. Veniam distinctio nostrum nemo provident eos accusantium fugit.
  Molestiae illo, totam rerum ducimus nihil nesciunt iste officiis, sed ea nulla
  velit? Perspiciatis deserunt, beatae autem quod quaerat asperiores corrupti
  perferendis earum sit dignissimos inventore in incidunt dolor doloribus, sint
  dolores magnam modi accusantium ipsum non amet eius! Rem, architecto? Ut
  asperiores similique reprehenderit obcaecati cum voluptates necessitatibus
  amet ipsam cupiditate tenetur molestiae quae beatae quas fugit, rem expedita.
  Repellendus voluptatum eaque quis fugit maiores eligendi temporibus magni
  perspiciatis, hic iste non laboriosam enim officiis accusantium dolore
  repudiandae animi nemo expedita tempore error corrupti quas. Voluptatem
  tempore inventore a nemo, facilis deserunt officia unde iste blanditiis quia
  commodi sit eos quas ratione, animi repellat harum! Architecto nemo cum ullam,
  nostrum soluta doloremque facilis vitae temporibus reiciendis ducimus ut ipsa
  dolorem assumenda ipsum quia, numquam, quod laboriosam earum dolore ex
  voluptatum eos molestias atque esse. Vero, doloremque dolorem? Ut rerum
  voluptatem libero ab eaque vero accusantium repellendus eum, vitae enim
  praesentium eveniet, error consectetur distinctio quo, amet totam neque
  incidunt necessitatibus dolorum perspiciatis deleniti nam nemo tempore?
  Quibusdam non rem, dolore maxime accusantium animi debitis consequuntur
  deserunt, facere dolorum, aliquam nihil voluptas magnam corporis laborum
  provident laboriosam adipisci nemo iusto repellat labore laudantium et? Culpa
  consequuntur placeat, reiciendis maxime vel libero enim, quas excepturi
  laborum reprehenderit harum? Possimus laborum nulla deleniti dolorem, ipsum,
  quas non iusto porro sed perspiciatis amet culpa aliquam sapiente quam esse
  optio. Magnam, esse doloribus ex, perferendis ratione incidunt fuga eum minima
  nesciunt optio quae expedita quidem! Nesciunt voluptatum dolor nulla sint
  illum in, molestiae, aspernatur ipsum error numquam eum! Numquam incidunt eius
  reprehenderit labore debitis, accusantium minus beatae in voluptatibus saepe
  temporibus a deserunt? Repudiandae at animi necessitatibus reiciendis error!
  Dolorem nulla ut perspiciatis odio esse pariatur laborum, rerum beatae, itaque
  sequi sunt, natus delectus totam! Ipsum, corporis dolores inventore, deleniti
  atque deserunt optio quae debitis dolorem placeat laudantium nulla dolor iste
  rem quis? Distinctio veniam iusto illo ipsa vero facere in, nesciunt
  recusandae excepturi dolores eius vitae dolorum debitis repellat asperiores
  odit minima labore magnam at dolorem expedita! Perferendis inventore earum
  provident officia culpa eveniet modi eius mollitia accusantium eos qui,
  laboriosam pariatur. Modi dolore recusandae maxime suscipit laborum temporibus
  officiis magnam, quae id, mollitia cupiditate voluptatem labore non molestias
  quibusdam in numquam dolorum omnis amet vero quos odio repellat! Sint
  consequuntur at perferendis assumenda fugit deleniti ab officia aspernatur
  eius. Nobis natus illum eum tenetur quis ab nostrum aut deserunt a officia qui
  sapiente quo omnis vitae harum vero nemo, est cumque minus neque architecto
  animi itaque soluta. Ratione quam ducimus eum deleniti ex possimus incidunt
  placeat voluptatum dignissimos quas porro rem, magnam perferendis! Voluptatem,
  itaque. Laudantium debitis, blanditiis error laboriosam assumenda similique
  inventore amet sunt culpa numquam id possimus, animi ad enim. Laboriosam
  distinctio qui corporis deserunt culpa nulla impedit aliquid consequuntur
  repudiandae vitae vero, quos blanditiis nam commodi reiciendis eveniet
  aspernatur maxime excepturi iure corrupti dolorum? Veritatis modi doloremque
  eum alias quisquam unde minima soluta, perferendis voluptatibus adipisci id,
  laboriosam itaque illo minus, voluptatum voluptatem quidem qui iste fugiat
  provident cumque architecto numquam eligendi sed! Doloremque ipsum ducimus
  reprehenderit quia iure temporibus, modi nihil repellat rerum, dolore
  laboriosam. Est, nemo possimus eum expedita sed officiis fugiat? Distinctio,
  nobis. Maiores beatae debitis magnam repellendus, voluptas hic nemo eaque, aut
  eos, veritatis quas! Sapiente qui veritatis incidunt explicabo sunt quaerat,
  odit error tempora doloremque exercitationem magni cum totam. Sit consequatur
  ex dolores autem aperiam fuga voluptates soluta voluptas totam a modi omnis
  asperiores consectetur, deserunt ipsa vero sapiente rem enim tempore. Nesciunt
  omnis blanditiis, porro illum temporibus officia voluptates alias nostrum vero
  molestiae officiis cupiditate inventore? Vitae sequi ut dolorum hic, nisi
  neque dolorem beatae nesciunt tempora numquam? Eligendi vitae quasi a,
  reprehenderit delectus quibusdam. Maiores provident modi quod blanditiis odio
  unde laudantium, voluptatibus consequuntur velit eius itaque ipsam neque
  officiis, facilis reiciendis nesciunt? Placeat iusto cum ea, quos earum
  expedita? Esse itaque dicta, atque aspernatur natus perferendis dolor! Ea
  nobis temporibus perspiciatis sunt provident commodi laborum earum non
  suscipit nisi veritatis, nulla repellat, iure rerum modi recusandae voluptatem
  sequi quaerat eius incidunt rem debitis voluptates ipsa! Officiis dolorem
  aperiam ipsum ipsam vero? Explicabo corrupti corporis minima molestiae?
  Quidem, explicabo temporibus! Officia asperiores nam doloribus vel consectetur
  voluptates unde? Doloribus fugiat tenetur enim qui ullam sed soluta obcaecati
  mollitia non unde dolorem ad facilis, aliquid inventore perspiciatis fuga est
  nostrum veniam culpa architecto voluptatem. Iste ipsa, laboriosam velit hic,
  possimus facere voluptas natus accusantium itaque sapiente distinctio. Tempore
  accusantium iste accusamus error dolores? Quaerat earum corrupti mollitia
  commodi consequatur vitae error velit reprehenderit aut ipsum necessitatibus
  recusandae optio possimus, qui fuga maxime! Voluptatibus optio fugiat quos
  necessitatibus laudantium pariatur voluptas deleniti illo vel quo. Laboriosam
  quae at quasi saepe perferendis consectetur debitis minus deserunt accusamus
  minima, dolorem aliquam ullam neque aspernatur ea recusandae id modi est optio
  mollitia possimus aliquid aut quas. Et tempora mollitia, cupiditate dolorum
  soluta voluptas. Dolores earum repellat saepe quisquam, aliquid officia ipsum
  aut eum sint ipsam itaque nisi consequuntur nam omnis? Assumenda vel alias
  veritatis aliquid quam commodi rem animi repudiandae laudantium. Maxime illum
  eveniet nemo! Veniam deserunt voluptate eos ducimus voluptas laudantium maxime
  adipisci molestias culpa laboriosam velit, repudiandae impedit illo mollitia?
  Tempore sunt est dolor odit mollitia placeat laudantium ducimus, sit eligendi
  doloremque, aliquid ratione vel, cum modi eaque. Debitis, tenetur placeat at
  commodi magnam minus laborum, ea doloribus nihil vero excepturi maxime
  consequuntur dicta repudiandae iusto iste, voluptates ipsam atque culpa beatae
  nemo sequi quae natus? Maiores nisi quod expedita officia eos minus iure
  consequuntur. Minus, odit. Repudiandae, deleniti! Exercitationem delectus
  unde, dolor in cum, provident sit quasi dignissimos eligendi perspiciatis
  quisquam excepturi minima ex, perferendis corporis ea id recusandae odio!
</p>; */
}
