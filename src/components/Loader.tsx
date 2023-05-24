import React from "react";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-yellow-500">
      <p className="text-red-500 font-extrabold mr-4 text-5xl">Cargando</p>
      <div
        className="text-red-500 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,10,0,0)]">
          Cargando...
        </span>
      </div>
    </div>
  );
};
