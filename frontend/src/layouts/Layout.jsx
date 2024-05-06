import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { AiFillHome, AiFillPlusCircle } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast';

const Layout = () => {
  //Cambiar las etiquetas a por Link
  return (
    <>
      <div className="bg-gray-950 min-h-screen flex justify-center">
        <div>
          <h1 className="font-bold text-center text-xl text-red-200 mt-5">CRUD Django Rest Framework, React JS and PostgreSQL</h1>
          <div className="flex justify-center m-3">
            
            <Link to="/" className='m-2 text-slate-200 hover:text-white transition-colors'><AiFillHome  size={30} /></Link>
            <Link to="/add" className='m-2 text-slate-200 hover:text-white transition-colors'><AiFillPlusCircle  size={30} /></Link>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout