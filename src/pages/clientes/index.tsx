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
import Top from '../../components/top/clientes/top';


export default function Dashboard() {
 
  return (
    <>
      <Head>
        <title>Clientes Clinica Cfit</title>
      </Head>
      <div className='flex'>
        <Sidebar/>
        <div className='flex-col w-full'>
        <Top/>
        <div>
      <div className="antialiased font-sans">
        <div className="container mx-auto px-4 sm:px-8 ">
          <div className="py-8  overflow-x-hidden overflow-y-hidden">
          <div className="my-2 flex items-center justify-between">
            <div>
              <button type="submit" className="bg-cfit_purple hover:bg-cfit_purpledark text-white font-semibold rounded-md py-2 px-4">
                <a>Cadastrar</a>
              </button>
            </div>
          
          </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-hidden">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Cliente
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        N° de Agendamentos
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Contato
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Data do último agendamento
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Consulta Realizada
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Detalhes
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                          <Image src={Img} className="w-10 md:w-16 rounded-full mx-auto "/>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">Irmã Gemea da Fê</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">2/10</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">(00)9.9999-9999</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">10/10/2023 11:00</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-cfit_greenbuton opacity-50 rounded-md"></span>
                          <span className="relative">Sim</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <svg className='ml-5' width="24" height="24" viewBox="0 0 16 16" fill="none">
                          <rect x="1" y="1" width="14" height="14" rx="3" stroke="#D5D5D5" />
                          <path d="M3 10.917V13H5.08304L11.2266 6.85641L9.14359 4.77336L3 10.917ZM12.8375 5.24552C13.0542 5.02888 13.0542 4.67893 12.8375 4.4623L11.5377 3.16248C11.3211 2.94584 10.9711 2.94584 10.7545 3.16248L9.73795 4.179L11.821 6.26205L12.8375 5.24552Z" fill="#D5D5D5"/>
                        </svg>                      
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10 h-10">
                          <Image src={Img} className="w-10 md:w-16 rounded-full mx-auto "/>
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">Irmã Gemea da irmã gemea da Fê</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">3/5</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">(00)9.9999-9999</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap">14/11/2023 11:00</p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-white leading-tight">
                          <span aria-hidden className="absolute inset-0 bg-cfit_redbuton opacity-50 rounded-md"></span>
                          <span className="relative">Não</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <svg className='ml-5' width="24" height="24" viewBox="0 0 16 16" fill="none">
                          <rect x="1" y="1" width="14" height="14" rx="3" stroke="#D5D5D5" />
                          <path d="M3 10.917V13H5.08304L11.2266 6.85641L9.14359 4.77336L3 10.917ZM12.8375 5.24552C13.0542 5.02888 13.0542 4.67893 12.8375 4.4623L11.5377 3.16248C11.3211 2.94584 10.9711 2.94584 10.7545 3.16248L9.73795 4.179L11.821 6.26205L12.8375 5.24552Z" fill="#D5D5D5"/>
                        </svg>                      
                      </td>
                    </tr>
                   
                  </tbody>
                  
                </table>
              </div>
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
