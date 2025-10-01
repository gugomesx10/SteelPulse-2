import React from 'react';
import { assets } from '../../assets/assets';

const About: React.FC = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>SOBRE <span className='text-gray-700 font-semibold'>NÓS</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="Imagem Sobre" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Bem-vindo à SteelPulse, sua parceira de confiança para gerenciar suas necessidades de saúde de forma conveniente e eficiente. Na SteelPulse, entendemos os desafios que as pessoas enfrentam ao agendar consultas médicas e gerenciar seus registros de saúde.</p>
          <p>A SteelPulse é comprometida com a excelência em tecnologia para saúde. Buscamos continuamente aprimorar nossa plataforma, integrando as últimas novidades para melhorar a experiência do usuário e oferecer um serviço superior. Seja para agendar sua primeira consulta ou gerenciar cuidados contínuos, a SteelPulse está aqui para apoiar você em cada etapa.</p>
          <b className='text-gray-800'>Nossa Visão</b>
          <p>Nossa visão na SteelPulse é criar uma experiência de saúde sem barreiras para cada usuário. Queremos aproximar pacientes e profissionais de saúde, facilitando o acesso ao cuidado que você precisa, quando precisa.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>POR QUE <span className='text-gray-700 font-semibold'>ESCOLHER A GENTE</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-2xl shadow-lg bg-gradient-to-r from-primary/10 to-blue-100 hover:from-primary hover:to-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFICIÊNCIA:</b>
          <p>Agendamento de consultas de forma rápida e prática para o seu dia a dia.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-2xl shadow-lg bg-gradient-to-r from-primary/10 to-blue-100 hover:from-primary hover:to-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIÊNCIA:</b>
          <p>Acesso a uma rede de profissionais de saúde confiáveis na sua região.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] rounded-2xl shadow-lg bg-gradient-to-r from-primary/10 to-blue-100 hover:from-primary hover:to-blue-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZAÇÃO:</b>
          <p>Recomendações e lembretes personalizados para ajudar você a cuidar da sua saúde.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
