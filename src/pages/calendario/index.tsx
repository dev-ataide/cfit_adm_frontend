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
import DetailAppointment from '../../components/modals/detailAppointment/detailappointment';

//Components
import Sidebar from '../../components/menu/sidebar';
import Top from '../../components/top/dashboard/top';

import axios from 'axios'
import FullCalendar from '../../components/calendar/Calendar';



export default function Calendario({ servicos, appointmentId }) {
  const [openModal, setOpenModal] = useState(false)
  const [openModalAppointmente, setOpenModalAppointment] = useState(false)

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

//   useEffect(() => {
//     const fechData = async () => {
//       const result = await fetch('http://localhost:8080/informacoes')
//         .then(response => response.json())
//         .then(data => data)
//       setItens(result)
//     }
//     fechData()
//   }, [])

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
          <div className='w-[3000px] mx-64 p-7'> 
<FullCalendar/>
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




