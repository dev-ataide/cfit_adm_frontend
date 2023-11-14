// Nativo do next
import Head from 'next/head';

import Image from 'next/image';
import Link from 'next/link';
//React
import { useContext, FormEvent, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
// Imagem
import Img from '../../../public/imglogincfit.png';

// Icones

//Components
import Sidebar from '../../components/menu/sidebar';
import Top from '../../components/top/servico/top';


export default function Dashboard() {
 
  return (
    <>
      <Head>
        <title>Serviços - Clinica Cfit</title>
      </Head>
      <div className='flex'>
        <Sidebar/>
        <div className='flex-col w-full'>
            <Top/>
            <div>
            <div>
              <button type="submit" className="bg-cfit_purple hover:bg-cfit_purpledark text-white font-semibold rounded-md mt-10 py-2 px-4">
                <a>Cadastrar </a>
              </button>
            </div>
          
<div>
  <div className="px-10 py-20 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
  <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.opw0yyddkARDeIClVsmBWgHaE8&pid=Api&P=0&h=180" alt="" />
      </div>
      <div className="py-4 px-4 bg-white">
        <h3 className="text-md font-semibold text-gray-600">Limpeza de Pele</h3>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-4 text-lg font-thin">R$ 250</p>
        <span className="flex items-end justify-center mt-4 w-full bg-cfit_purple hover:bg- py-1 rounded">
         
          <button className="font-semibold text-white">Editar</button>
        </span>
      </div>
    </div>
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.opw0yyddkARDeIClVsmBWgHaE8&pid=Api&P=0&h=180" alt="" />
      </div>
      <div className="py-4 px-4 bg-white">
        <h3 className="text-md font-semibold text-gray-600">Limpeza de Pele</h3>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-4 text-lg font-thin">R$ 250</p>
        <span className="flex items-center justify-center mt-4 w-full bg-cfit_purple hover:bg-cfit_purpledark py-1 rounded">
         
          <button className="font-semibold text-white">Editar</button>
        </span>
      </div>
    </div>
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.opw0yyddkARDeIClVsmBWgHaE8&pid=Api&P=0&h=180" alt="" />
      </div>
      <div className="py-4 px-4 bg-white">
        <h3 className="text-md font-semibold text-gray-600">Limpeza de Pele</h3>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-4 text-lg font-thin">R$ 250</p>
        <span className="flex items-center justify-center mt-4 w-full bg-cfit_purple hover:bg-cfit_purpledark py-1 rounded">
         
          <button className="font-semibold text-white">Editar</button>
        </span>
      </div>
    </div>
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.opw0yyddkARDeIClVsmBWgHaE8&pid=Api&P=0&h=180" alt="" />
      </div>
      <div className="py-4 px-4 bg-white">
        <h3 className="text-md font-semibold text-gray-600">Limpeza de Pele</h3>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-4 text-lg font-thin">R$ 250</p>
        <span className="flex items-center justify-center mt-4 w-full bg-cfit_purple hover:bg-cfit_purpledark py-1 rounded">
         
          <button className="font-semibold text-white">Editar</button>
        </span>
      </div>
    </div>
    <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.opw0yyddkARDeIClVsmBWgHaE8&pid=Api&P=0&h=180" alt="" />
      </div>
      <div className="py-4 px-4 bg-white">
        <h3 className="text-md font-semibold text-gray-600">Limpeza de Pele</h3>
        <br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="mt-4 text-lg font-thin">R$ 250</p>
        <span className="flex items-center justify-center mt-4 w-full bg-cfit_purple hover:bg-cfit_purpledark py-1 rounded">
         
          <button className="font-semibold text-white">Editar</button>
        </span>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
   

      </div>
    </>

  );
}
