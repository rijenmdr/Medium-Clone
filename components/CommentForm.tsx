import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Post } from '../typing'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  post: Post
}

const CommentForm: React.FC<Props> = ({ post }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  console.log(post)

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true)
    try {
      await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      setIsSubmitted(true)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  return (
    <>
      {isSubmitted ? (
        <div className='flex flex-col p-5 bg-yellow-500 max-w-2xl mx-auto my-10 text-white'>
          <h1 className='text-2xl font-bold my-2'>Thankyou for submitting your comment.</h1>
          <p className='text-md'>Once it has been approved it will appear here.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-10 flex max-w-2xl flex-col px-2"
        >
          <h3 className="text-sm text-yellow-500">Enjoy this article?</h3>
          <h4 className="text-3xl font-bold">Leave a comment below</h4>
          <hr className="mt-2 py-3" />

          <input
            {...register('_id')}
            name="_id"
            type="hidden"
            value={post._id}
          />

          <label className="mb-5 block">
            <span className="text-gray-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="form-input mt-1 block w-full rounded border px-3 py-2 shadow outline-none ring-yellow-500 focus:ring"
              type="text"
              placeholder="Enter your name"
              disabled={loading}
            />
            {errors.name && (
              <span className='text-sm text-red-500 before:mr-1 before:content-["*"]'>
                This Name Field is required.
              </span>
            )}
          </label>

          <label className="mb-5 block">
            <span className="text-gray-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="form-input mt-1 block w-full rounded border px-3 py-2 shadow outline-none ring-yellow-500 focus:ring"
              type="email"
              placeholder="Enter your email"
              disabled={loading}
            />
            {errors.email && (
              <span className="text-sm text-red-500 before:mr-1 before:content-['*']">
                This Email Field is required.
              </span>
            )}
          </label>

          <label className="mb-5 block">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="form-input mt-1 block w-full rounded border px-3 py-2 shadow outline-none ring-yellow-500 focus:ring"
              placeholder="Comment"
              rows={8}
              disabled={loading}
            />
            {errors.comment && (
              <span className='text-sm text-red-500 before:mr-1 before:content-["*"]'>
                This Comment Field is required.
              </span>
            )}
          </label>

          <button
            className="focus:shadow-outline mt-2 rounded border bg-yellow-500 py-2 font-bold text-white shadow hover:bg-yellow-400"
            type="submit"
            disabled={loading}
          >
            Comment
          </button>
        </form>
      )}
    </>
  )
}

export default CommentForm
