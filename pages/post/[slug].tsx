import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import PortableText from 'react-portable-text'
import CommentForm from '../../components/CommentForm'
import CommentSection from '../../components/CommentSection'
import Header from '../../components/Header'
import PostDetail from '../../components/PostDetail'
import { sanityClient, urlFor } from '../../sanity'

import { Post } from '../../typing'

interface Props {
  post: Post
}

const Post: React.FC<Props> = ({ post }) => {
  console.log(post)
  return (
    <main>
      <Head>
        <title>{post?.title}</title>
      </Head>

      <Header />

      <PostDetail post={post} />

      <hr className="mx-auto my-10 max-w-lg border border-yellow-500" />

      <CommentForm post={post} />

      <CommentSection
        comments={post?.comments}
      />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
         current
       }
    }`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        author-> {
         name,
         image
        },
        'comments': *[
          _type == "comment" &&
          post._ref == ^._id &&
          approved == true
        ],
        description,
        mainImage,
        slug,
        _createdAt,
        body
      }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    revalidate: 10,
    props: {
      post,
    },
  }
}

export default Post
