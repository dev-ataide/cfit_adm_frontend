import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, FormEvent, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Img from '../../../public/imglogincfit.png';
import Sidebar from '../../components/menu/sidebar';
import Top from '../../components/top/clientes/top';
import axios from 'axios';
import format from 'date-fns/format';

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:8080/dados-cliente-agendamentos');
    const clientes = response.data.dadosClientesAgendamentos;

    return {
      props: { clientes },
    };
  } catch (error) {
    console.error('Erro ao buscar os clientes:', error);
    return {
      props: { clientes: [] },
    };
  }
}

export default function Dashboard({ clientes }) {
  const [itensPerPage, setItensPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(clientes.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentClientes = clientes.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const goNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages - 1));
  };

  return (
    <>
      <Head>
        <title>Clientes Clínica Cfit</title>
      </Head>
      <div className='flex'>
        <Sidebar />
        <div className='flex-col w-full'>
          <Top />
          <div className="antialiased font-sans">
            <div className="container mx-auto px-4 sm:px-8">
              <div className="py-8  overflow-x-hidden overflow-y-hidden">
                <div className="my-2 flex items-center justify-between"></div>
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
                        </tr>                      </thead>
                      <tbody>
                        {currentClientes.map((cliente, index) => (
                          <tr key={index}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-10 h-10">
                                <Image src={Img} className="w-10 md:w-16 rounded-full mx-auto " />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">{cliente.Cliente.nome}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{cliente['N° de Agendamentos']}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">{cliente.CONTATO}</p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {/* Renderizar o agendamento mais recente */}
                            {cliente.Detalhes.agendamentos.length > 0 && (
                              <p className="text-gray-900 whitespace-no-wrap">
                                {format(new Date(cliente.Detalhes.agendamentos[0].dataHoraAgendamento), 'dd/MM/yyyy HH:mm')}
                              </p>
                            )}
                          </td>
                          <td className={`px-5 py-5 border-b border-gray-200 bg-white text-sm`}>
                            {cliente.Detalhes.agendamentos && cliente.Detalhes.agendamentos.length > 0 ? (
                              <span
                                className={`relative inline-block px-3 py-1 font-semibold text-white leading-tight ${cliente.Detalhes.agendamentos[0].StatusDeConsulta === 'Realizada'
                                  ? 'bg-green-500' // Cor verde para 'Realizada'
                                  : cliente.Detalhes.agendamentos[0].StatusDeConsulta === 'Pendente'
                                    ? 'bg-yellow-500' // Cor amarela para 'Pendente'
                                    : 'bg-red-500' // Cor vermelha para 'Cancelada'
                                  }`}
                              >
                                <span aria-hidden className="absolute inset-0 opacity-50 rounded-md"></span>
                                <span className="relative">
                                  {cliente.Detalhes.agendamentos[0].StatusDeConsulta === 'Realizada'
                                    ? 'Realizada' // Texto para o status 'Realizada'
                                    : cliente.Detalhes.agendamentos[0].StatusDeConsulta === 'Pendente' || ''
                                      ? 'Pendente' // Texto para o status 'Pendente'
                                      : 'Cancelada'}{' '}
                                </span>
                              </span>
                            ) : (
                              <span>N/A</span>
                            )}
                          </td>

                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <svg className='ml-5' width="24" height="24" viewBox="0 0 16 16" fill="none">
                              <rect x="1" y="1" width="14" height="14" rx="3" stroke="#D5D5D5" />
                              <path
                                d="M3 10.917V13H5.08304L11.2266 6.85641L9.14359 4.77336L3 10.917ZM12.8375 5.24552C13.0542 5.02888 13.0542 4.67893 12.8375 4.4623L11.5377 3.16248C11.3211 2.94584 10.9711 2.94584 10.7545 3.16248L9.73795 4.179L11.821 6.26205L12.8375 5.24552Z"
                                fill="#D5D5D5"
                              />
                            </svg>
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className='absolute top-3/4 right-32'>
                    <div className="flex items-center justify-end">
                      <button onClick={goPrevPage}>&lt;</button>
                      {Array.from(Array(pages), (index) => (
                        <button key={index} onClick={() => goToPage(index)} ></button>
                      ))}
                      <span>
                        {currentPage + 1}/{pages}
                      </span>
                      <button onClick={goNextPage}>&gt;</button>
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
