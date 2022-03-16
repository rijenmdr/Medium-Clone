import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../sanity'
import { Post } from '../typing'

interface Props {
  post: Post
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link href={`/post/${post?.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border">
        <img
          src={urlFor(post?.mainImage).url()!}
          className="h-60 w-full object-cover transition-transform delay-200 ease-in-out group-hover:scale-105"
          alt="preview_image"
        />
        <div className="flex justify-between bg-white p-5">
          <div>
            <p className="text-lg font-bold">{post?.title}</p>
            <p className="text-xs">
              <span className="overflow-hidden text-ellipsis">
                {post?.description}
              </span>{' '}
              by <span className="font-bold">{post?.author?.name}</span>
            </p>
          </div>

          <img
            src={urlFor(post?.author.image).url()!}
            className="h-12 w-12 rounded-full object-cover"
            alt="profile-image"
          />
        </div>
      </div>
    </Link>
  )
}

export default PostCard
