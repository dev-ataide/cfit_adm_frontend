import React from "react";

export default function CriarServico({isOpen}) {
    if (isOpen){
        return <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-80 z-50" >
                  <div className="fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-white rounded-md w-96 h-96" >
                    Modals
                  </div>
                </div>
    }
    return null
}