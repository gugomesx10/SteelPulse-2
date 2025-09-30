import React from 'react';
import { assets } from '../../assets/assets';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white rounded-t-2xl shadow-lg mt-24 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:grid grid-cols-1 sm:grid-cols-3 gap-10 py-12 text-sm">
        <div className="flex flex-col items-center sm:items-start">
          <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
          <p className="w-full text-gray-600 leading-6 text-center sm:text-left">
            Lorem Ipsum é simplesmente um texto fictício da indústria gráfica e tipográfica. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma galeria de tipos e embaralhou-os para fazer um livro de amostras tipográficas.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xl font-semibold mb-5 text-primary">EMPRESA</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-primary cursor-pointer transition">Início</li>
            <li className="hover:text-primary cursor-pointer transition">Sobre nós</li>
            <li className="hover:text-primary cursor-pointer transition">Entrega</li>
            <li className="hover:text-primary cursor-pointer transition">Política de privacidade</li>
          </ul>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="text-xl font-semibold mb-5 text-primary">ENTRE EM CONTATO</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="hover:text-primary transition">+55 11 9999-9999</li>
            <li className="hover:text-primary transition">rm555999@fiap.com.br</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <hr className="border-gray-200" />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2025 SteelPulse - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;