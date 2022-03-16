import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import PostList from '../components/PostList'
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typing'

interface Props {
  posts: [Post]
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Banner />

      <PostList posts={posts} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    author-> {
     name,
     image
    },
    description,
    mainImage,
    slug
  }`

  const posts = await sanityClient.fetch(query)

  console.log(posts)

  return {
    props: {
      posts,
    },
  }
}

export default Home
