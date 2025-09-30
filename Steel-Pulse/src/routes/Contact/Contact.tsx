import React from 'react';
import { assets } from '../../assets/assets';


const Contact: React.FC = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTATE <span className='text-gray-700 font-semibold'>NOS</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Imagem de contato" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>NOSSO ESCRITÓRIO</p>
          <p className='text-gray-500'>São Paulo <br />  Av. Paulista, 1106 - 7º andar - Bela Vista, São Paulo - SP, 01311-000</p>
          <p className='text-gray-500'>Tel: (55) 9999-9999 <br /> Email: rm555999@fiap.com</p>
          <p className='font-semibold text-lg text-gray-600'>CARREIRAS NO STEELPULSE</p>
          <p className='text-gray-500'>Saiba mais sobre nossas equipes e oportunidades de trabalho.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explorar Vagas</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
