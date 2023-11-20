import React, { useState } from "react";
import axios from "axios";

export default function CriarServico({ isOpen, setModalOpen }) {
  const [formData, setFormData] = useState({
    nomeServico: "",
    descricao: "",
    preco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/servicos", formData);
      console.log("Novo serviço criado:", response.data);
      // Lógica para lidar com o sucesso da criação do serviço
    } catch (error) {
      console.error("Erro ao criar o serviço:", error);
      // Lógica para lidar com o erro na criação do serviço
    }
  };

  if (isOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-50">
        <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  rounded-md w-300 h-300 relative min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
          <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
          <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
            <button className="flex justify-end items-end w-full text-gray-900  rounded-md focus:outline-none" onClick={setModalOpen}>
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-bold text-gray-900">
                Cadastre um novo serviço!
              </h2>
              <p className="mt-2 text-sm text-gray-400">Cadastrando um novo serviço ele estará disponível para clientes no site.</p>
            </div>
            <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Nome do Serviço</label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="nomeServico"
                  placeholder="EX: Armonização Facial"
                  value={formData.nomeServico}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Descrição do Serviço</label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="descricao"
                  placeholder="Descrição do Serviço"
                  value={formData.descricao}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-1 space-y-2">
                <label className="text-sm font-bold text-gray-500 tracking-wide">Preço do Serviço</label>
                <input
                  className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  type="text"
                  name="preco"
                  placeholder="EX: R$150,50"
                  value={formData.preco}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="my-5 w-full flex justify-center bg-cfit_purple text-gray-100 p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline hover:bg-cfit_purpledark shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
