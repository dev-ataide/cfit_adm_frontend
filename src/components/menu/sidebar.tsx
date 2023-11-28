// SidebarLayout.js
import { useContext } from 'react';
import Image from 'next/image';
import Img from '../../../public/avatarfigma.png';
import Link from 'next/link';
import { AuthContext } from '../../contexts/AuthContext'; // Importe o AuthContext

const Sidebar = () => {
  const { user } = useContext(AuthContext); // Consuma o contexto AuthContext
console.log(user)

  return (
    <body className="font-poppins antialiased">
      <div
        id="view"
        className="h-full w-auto flex flex-row"
      >
        <div
          id="sidebar"
          className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        >
          <div className="space-y-6 md:space-y-5 mt-10">
            <div id="profile" className="space-y-2 flex ml-2">
              <Image src={Img} className="w-10 md:w-16 rounded-full mx-auto " />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-left ml-2 text-cfit_purple">
                  Administrador
                </h2>
                <p className="text-xs text-black text-left ml-2">
                  {/* {user.email} Use o email do usuário do contexto */}
                </p>
              </div>
            </div>
            <div className='h-0.5 w-full bg-gray-200'></div>
           
 <div id="menu" className="flex flex-col space-y-1">
            {/* menu */}
          <Link href="/dashboard">
            <a className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-cfit_purple hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">                
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current inline-block" viewBox="0 0 512 512"><rect fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" x="48" y="80" width="416" height="384" rx="48"/><circle cx="296" cy="232" r="24"/><circle cx="376" cy="232" r="24"/><circle cx="296" cy="312" r="24"/><circle cx="376" cy="312" r="24"/><circle cx="136" cy="312" r="24"/><circle cx="216" cy="312" r="24"/><circle cx="136" cy="392" r="24"/><circle cx="216" cy="392" r="24"/><circle cx="296" cy="392" r="24"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" strokeLinecap="round" d="M128 48v32M384 48v32"/><path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" d="M464 160H48"/></svg>
            <span className="ml-3">Agendamentos</span>
            </a>
          </Link>
          <Link href="#">
            <a className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-cfit_purple hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">                
            <svg xmlns="http://www.w3.org/2000/svg"  className="w-6 h-6 fill-current inline-block" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"/></svg>
            <span className="ml-3">Calendario</span>
            </a>
          </Link>
          <Link href="/servicos">
            <a className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-cfit_purple hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">                
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current inline-block" viewBox="0 0 512 512"><rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0011.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48"/></svg>
            <span className="ml-3">Gerenciar Serviços</span>
            </a>
          </Link>
         
          <Link href="/clientes">
            <a className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-cfit_purple hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">                
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current inline-block" viewBox="0 0 512 512"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
            <span className="ml-3">Clientes</span>
            </a>
          </Link>
          </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Sidebar;
