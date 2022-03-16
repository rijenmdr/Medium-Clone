import { Comment } from '../typing'

interface Props {
  comments: [Comment]
}

const CommentSection: React.FC<Props> = ({ comments }) => {
console.log(comments)
  return (
    <div className='flex flex-col max-w-2xl mx-auto p-10 my-10 shadow-yellow-500 shadow'>
      <h3 className='text-4xl'>Comments</h3>

      <hr className='pb-2'/>

      {comments && comments.length <= 0 ? (
        <p>No comments yet!</p>
      ) : (
        comments.map((comment) => (
          <div className='my-2' key={comment?._id}>
            <p>
              <span className='text-yellow-500'>{comment.name}: </span>
              {comment.comment}
            </p>
          </div>
        ))
      )}
    </div>
  )
}

export default CommentSection
