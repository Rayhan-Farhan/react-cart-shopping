import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <nav className='shadow-md bg-white border-gray-300'>
                <div className='container flex flex-wrap items-center justify-between mx-auto '>
                    <Link to="/" className="flex items-center">
                        <span className="self-center ml-2 text-xl font-semibold whitespace-nowrap">Logo</span>
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <Link to="/customers" className="block py-2 pl-3 pr-4 rounded md:p-0 " aria-current="page">Customers</Link>
                            </li>
                            <li>
                                <Link to="/store" className="block py-2 pl-3 pr-4 rounded md:p-0 " aria-current="page">Store</Link>
                            </li>
                            <li>
                                <Link to="/payment" className="block py-2 pl-3 pr-4 rounded md:p-0 " aria-current="page">Payment</Link>
                            </li>
                            <li>
                                <Link to="/categories" className="block py-2 pl-3 pr-4 rounded md:p-0 " aria-current="page">Categories</Link>
                            </li>
                            <li>
                                <Link to="/login" className="block py-2 pl-3 pr-4 rounded md:p-0 " aria-current="page">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
    </>
  )
}

export default Navbar