import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../UserContext.jsx"

const Header = () => {
  const {user} = useContext(UserContext)

    return (
    <>
      <header className='p-4 flex justify-between content-center '>
        <Link to={"/"} className='flex gap-1 items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082" />
          </svg>
          <span className='font-bold border-gray-200 border-solid text-primary'>Alarinka</span>
        </Link>
        <div className="flex rounded-full justify-between rounded-md min-w-96 py-1 px-2 ">
          <div className='bg-slate-200 border border-text rounded-l-lg px-4 flex items-center justify-center font-medium text-sm'>Where</div>

          <div className='bg-slate-200 border border-text rounded-r-lg px-4 flex items-center justify-center font-medium text-sm'>When</div>

          <div className='bg-slate-100 border border-text rounded-l-lg px-4 flex items-center justify-center font-medium text-sm'>Add guests</div>

          <button className='bg-primary hover:bg-accent rounded-r-lg px-4 flex items-center justify-center text-white font-semibold'>Search</button>

        </div>

        <Link to={user?.name ? '/account' : '/login'} className='flex border border-text rounded-full p-2 bg-slate-200'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
          </svg>
          {!!user && (
            <div>
              {user.name}
            </div>
        )}
        </Link>
        
      </header>
    </>
    )
}

export default Header