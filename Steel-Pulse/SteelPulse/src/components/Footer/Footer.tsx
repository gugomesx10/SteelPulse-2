import React from 'react';
import { assets } from '../../assets/assets';

const Footer: React.FC = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo SteelPulse" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>A SteelPulse é referência em tecnologia para saúde, facilitando o agendamento de consultas e o gerenciamento dos seus cuidados médicos. Nossa missão é conectar você aos melhores profissionais de forma simples e eficiente.</p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>EMPRESA</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Início</li>
            <li>Sobre nós</li>
            <li>Entregas</li>
            <li>Política de privacidade</li>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>CONTATO</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+55 (11) 96447-5266</li>
            <li>rm555999@fiap.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ SteelPulse.com - Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Footer;
