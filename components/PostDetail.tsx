import PortableText from "react-portable-text"
import { urlFor } from "../sanity"
import { Post } from "../typing"

interface Props {
  post: Post
}

const PostDetail: React.FC<Props> = ({post}) => {
  return (
    <>
      <img
        className="h-44 w-full object-cover"
        src={urlFor(post?.mainImage).url()!}
        alt="cover-image"
      />

      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post?.title}</h1>
        <h2 className="mb-5 text-xl font-light leading-5 text-gray-500">
          {post?.description}
        </h2>

        <div className="flex items-center space-x-3">
          <img
            src={urlFor(post?.author?.image).url()}
            alt="profile-img"
            className="h-12 w-12 rounded-full object-cover"
          />

          <p className="text-sm font-extralight">
            Blog by <span className="text-green-600">{post?.author?.name}</span>{' '}
            - Published at {post?._createdAt?.toLocaleString()}
          </p>
        </div>

        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            content={post?.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h1 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
    </>
  )
}

export default PostDetail
