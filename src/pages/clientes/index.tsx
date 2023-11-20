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
                        </tr>
                      </thead>
                      <tbody>
                        {clientes.map((cliente, index) => (
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
                                    : cliente.Detalhes.agendamentos[0].StatusDeConsulta === 'Pendente'
                                      ? 'Pendente' // Texto para o status 'Pendente'
                                      : 'Cancelada'}{' '}
                                </span>
                              </span>
                            </td>

                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                              {/* Aqui você pode adicionar conteúdo adicional para esta célula se necessário */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
