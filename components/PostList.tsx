import Link from 'next/link'
import { Post } from '../typing'
import PostCard from './PostCard'

interface Props {
  posts: [Post]
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6'>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default PostList
