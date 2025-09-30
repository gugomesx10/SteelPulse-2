import React from 'react';
import { assets } from '../assets/assets';

const Footer: React.FC = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem Ipsum é simplesmente um texto fictício da indústria gráfica e tipográfica. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galeria de tipos e embaralhou-os para fazer um livro de amostras tipográficas.
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>EMPRESA</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Início</li>
            <li>Sobre nós</li>
            <li>Entrega</li>
            <li>Política de privacidade</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>ENTRE EM CONTATO</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+55 11 9999-9999</li>
            <li>rm555999@fiap.com.br</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          © 2025 SteelPulse - Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

export default Footer;
