// Nativo do next
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useContext, FormEvent, useState, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Img from '../../../public/imglogincfit.png';
import CriarServico from '../../components/modals/servicos/servico';
import Sidebar from '../../components/menu/sidebar';
import Top from '../../components/top/servico/top';

export default function ServicosDashboard({ servicos }) {
  const [openModal, setOpenModal] = useState(false);
  const [itens, setItens] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(itens.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/servicos');
        setItens(response.data);
      } catch (error) {
        console.error('Erro ao buscar os serviços:', error);
        setItens([]);
      }
    };
    fetchData();
  }, []);

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
        <title>Serviços - Clinica Cfit</title>
      </Head>
      <div className='flex'>
        <Sidebar />
        <div className='flex-col w-full'>
          <Top />
          <div className="container mx-auto px-2 sm:px-8 ">
            <div>
              <CriarServico isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}></CriarServico>
              <button onClick={() => setOpenModal(true)} type="submit" className="bg-cfit_purple hover:bg-cfit_purpledark text-white font-semibold rounded-md mt-10 py-2 px-4">
                <a>Cadastrar </a>
              </button>
            </div>

            <div className="px-10 py-20 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
              {currentItens.map((servico) => (
                <div key={servico.id} className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                  <div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.opw0yyddkARDeIClVsmBWgHaE8&pid=Api&P=0&h=180" alt="" />
                  </div>
                  <div className="py-4 px-4 bg-white">
                    <h3 className="text-md font-semibold text-gray-600">{servico.nomeServico}</h3>
                    <br />
                    <p>{servico.descricao}</p>
                    <p className="mt-4 text-lg font-thin">{`R$ ${servico.preco}`}</p>
                    <span className="flex items-center justify-center mt-4 w-full bg-cfit_purple hover:bg-cfit_purpledark py-1 rounded">
                      <button className="font-semibold text-white">Editar</button>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className='absolute top-3/4 right-32'>
              <div className="flex items-center justify-end">
                <button onClick={goPrevPage}>&lt;</button>
                {Array.from(Array(pages), (index) => (
                  <button key={index} onClick={() => goToPage(index)}></button>
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
