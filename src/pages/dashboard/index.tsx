// Nativo do next
import Head from 'next/head';

import Image from 'next/image';
import Link from 'next/link';
//React
import { useContext, FormEvent, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
// Imagem
import Img from '../../../public/imglogincfit.png';
import { format } from 'date-fns';

// Modal
import Agendar from '../../components/modals/agendar/agendar';

//Components
import Sidebar from '../../components/menu/sidebar';
import Top from '../../components/top/dashboard/top';

import axios from 'axios'



export default function Dashboard({ servicos }) {
  const [openModal, setOpenModal] = useState(false)

  const [itens, setItens] = useState([])
  const [itensPerPage, setItensPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex)
  const [filtro, setFiltro] = useState(''); // Estado para armazenar o valor selecionado no filtro

  // Função para lidar com a mudança no valor do filtro
  const handleFiltroChange = (event) => {
    setFiltro(event.target.value);
  };

  // Filtrar os itens com base no valor do filtro
  const itensFiltrados = currentItens.filter((agendamento) => {
    if (filtro === '' || agendamento.Servico.nomeServico === filtro) {
      return true;
    }
    return false;
  });
  useEffect(() => {
    const fechData = async () => {
      const result = await fetch('http://localhost:8080/informacoes')
        .then(response => response.json())
        .then(data => data)
      setItens(result)
    }
    fechData()
  }, [])
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
        <title>Agendamentos - Clinica Cfit</title>
      </Head>
      <div className='flex'>
        <Sidebar />
        <div className='flex-col w-full'>
          <Top />
          <div>
            <div className="antialiased font-sans">
              <div className="container mx-auto px-4 sm:px-8 ">
                <div className="py-8  overflow-x-hidden overflow-y-hidden">
                  <div className="my-2 flex items-center justify-between text-black">
                    <Agendar isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} servicos={servicos}></Agendar>

                    <div>
                      <button onClick={() => setOpenModal(true)} type="submit" className="bg-cfit_purple hover:bg-cfit_purpledark text-white font-semibold rounded-md py-2 px-4">
                        <a>Agendar</a>
                      </button>
                    </div>
                    <div className="relative">
                      <select
                        className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500 rounded-lg"
                        value={filtro}
                        onChange={handleFiltroChange}
                      >
                        <option value="">Todos os Serviços</option>
                        {servicos.map((servico) => (
                          <option key={servico.id} value={servico.nomeServico}>
                            {servico.nomeServico}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center ml-4 px-2 text-gray-700 rounded-lg">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
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
                              Serviço
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Contato
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Data
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Ida Conf
                            </th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                              Detalhes
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {itensFiltrados.map((agendamento) => (
                            <tr key={agendamento.id}>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 w-10 h-10">
                                    <Image src={Img} className="w-10 md:w-16 rounded-full mx-auto" />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap">{agendamento.Cliente.nome}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{agendamento.Servico.nomeServico}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <p className="text-gray-900 whitespace-no-wrap">{agendamento.Cliente.telefone}</p>
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                {agendamento.dataHoraAgendamento && (
                                  <p className="text-gray-900 whitespace-no-wrap">
                                    {format(new Date(agendamento.dataHoraAgendamento), 'dd/MM/yyyy HH:mm')}
                                  </p>
                                )}
                              </td>
                              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span
                                  className={`relative inline-block px-3 py-1 font-semibold text-white leading-tight ${agendamento.StatusDeConsulta === 'Realizada'
                                      ? 'bg-green-500' // Cor verde para 'Realizada'
                                      : agendamento.StatusDeConsulta === 'Pendente'
                                        ? 'bg-yellow-500' // Cor amarela para 'Pendente'
                                        : 'bg-red-500' // Cor vermelha para 'Cancelada'
                                    }`}
                                >
                                  <span aria-hidden className="absolute inset-0 opacity-50 rounded-md"></span>
                                  <span className="relative">
                                    {agendamento.StatusDeConsulta === 'Realizada'
                                      ? 'Realizada' // Texto para o status 'Realizada'
                                      : agendamento.StatusDeConsulta === 'Pendente'
                                        ? 'Pendente' // Texto para o status 'Pendente'
                                        : 'Cancelada'}{' '}
                                  </span>
                                </span>
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

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:8080/servicos');
    const servicos = response.data;
    return {
      props: { servicos },
    };
  } catch (error) {
    console.error('Erro ao buscar os serviços:', error);
    return {
      props: { servicos: [] },
    };
  }
}




