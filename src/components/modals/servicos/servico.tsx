import React from "react";

export default function CriarServico({ isOpen, setModalOpen }) {
  if (isOpen) {
    return <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-50" >
      <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  rounded-md w-300 h-300 relative min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div className="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
        <button className="flex justify-end items-end w-full text-gray-900  rounded-md focus:outline-none" onClick={setModalOpen} >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              Cadastre um novo serviço!
            </h2>
            <p className="mt-2 text-sm text-gray-400">Cadastrando um novo serviço ele estará disponivel para clientes no site.</p>
          </div>
          <form className="mt-8 space-y-3" action="#" method="POST">
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">Anexe aqui a imagem do serviço.</label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                  <div className="h-full w-full text-center flex flex-col items-center justify-center ">
                    <p className="pointer-none text-gray-500 "><span className="text-sm">Arraste e solte os arquivos aqui</span> <br /> </p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              <span>Arquivos suportados: png, jpeg jpg e pdf</span>
            </p>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">Nome do Serviço</label>
              <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="EX: Armonização Facial" />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">Descrição do Serviço</label>
              <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="Descrição do Serviço" />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold text-gray-500 tracking-wide">Preço do Serviço</label>
              <input className="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="EX: R$150,50" />
            </div>


          </form>
          <div>
            <button type="submit" className="my-5 w-full flex justify-center bg-cfit_purple text-gray-100 p-4  rounded-full tracking-wide
                                      font-semibold  focus:outline-none focus:shadow-outline hover:bg-cfit_purpledark shadow-lg cursor-pointer transition ease-in duration-300">
              Cadastrar
            </button>
          </div>
        </div>
      </div>
    </div>
  };
  return null
}
