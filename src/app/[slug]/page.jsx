import { fetchGraphQL } from "@/lib/graphql-utils"
import NotFound from "../not-found"
import { RichText } from "@graphcms/rich-text-react-renderer";
import { singlePage } from "@/queries/pages";



export default async function Page({ params }) {

    const { page } = await fetchGraphQL(singlePage, {}, { variables: { slug: params.slug } });
    if (!page) {
        return NotFound()
    }
    return (
        <div className="divide-y divide-gray-200">
            <div className="pt-6 pb-8 space-y-2 md:space-y-5">
                <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    {page.title}
                </h1>
            </div>
            <div className="pb-16 lg:pb-20">
                <div className="prose max-w-none pt-10 pb-8">
                    <RichText content={page.content.raw} />
                </div>
            </div>
        </div>
    )
}