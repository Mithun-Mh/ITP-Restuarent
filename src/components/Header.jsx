import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
   
   <header className='bg-orange-300 shadow-md'>
    <div className='flex justify-between items-start max-w-6xl max-auto p-3'>
      <Link to='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>Restu</span>
        <span className='text-slate-700'>Travaller</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg'>
            <input type="text" placeholder='search ur yummy...' className='bg-transparent  focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-slate-600 items-end'/>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline '> Home  </li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline '> About  </li>
            </Link>
            <Link to='/packages'>
            <li className='hidden sm:inline text-slate-700 hover:underline'> Packages  </li>
            </Link>
            <Link to='/specials'>
            <li className='hidden sm:inline text-slate-700 hover:underline'> Specials </li>
            </Link>
            <Link to='/specials'></Link>
            <li className=' text-slate-700 hover:underline'> SignIn  </li>
        </ul>
        </div>
      </header>
  )
}

