import React from 'react';
import { assets } from '../../assets/assets';

const Contact: React.FC = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTATO <span className='text-gray-700 font-semibold'>CONOSCO</span></p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Imagem Contato" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>NOSSO ESCRITÓRIO</p>
          <p className=' text-gray-500'>54709 Willms Station <br /> Sala 350, Washington, EUA</p>
          <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CARREIRAS NA STEELPULSE</p>
          <p className=' text-gray-500'>Saiba mais sobre nossas equipes e vagas disponíveis.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explorar Vagas</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
