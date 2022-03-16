import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex justify-between p-5 max-w-7xl mx-auto'>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
          />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex cursor-pointer">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className='flex items-center space-x-5 text-green-600 cursor-pointer'>
        <h3>Sign In</h3>
        <h3 className='border border-green-600 bg-white rounded-full px-4 py-1'>Get Started</h3>
      </div>
    </header>
  )
}

export default Header
