import React from 'react';
import { assets } from '../../assets/assets';

const About: React.FC = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>SOBRE <span className='text-gray-700 font-semibold'>NÓS</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="Sobre a empresa" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Bem-vindo ao Prescripto, seu parceiro confiável para gerenciar suas necessidades de saúde de forma conveniente e eficiente. No Prescripto, entendemos os desafios que as pessoas enfrentam ao agendar consultas médicas e gerenciar seus registros de saúde.</p>
          <p>Prescripto é comprometido com a excelência em tecnologia de saúde. Estamos sempre nos esforçando para melhorar nossa plataforma, integrando os mais recentes avanços para melhorar a experiência do usuário e fornecer um serviço superior. Seja agendando sua primeira consulta ou gerenciando o cuidado contínuo, o Prescripto está aqui para apoiá-lo em cada etapa do processo.</p>
          <b className='text-gray-800'>Nossa Visão</b>
          <p>A nossa visão no Prescripto é criar uma experiência de saúde sem interrupções para cada usuário. Nosso objetivo é preencher a lacuna entre pacientes e prestadores de cuidados de saúde, tornando mais fácil para você acessar o atendimento de que precisa, quando precisar.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>POR QUE <span className='text-gray-700 font-semibold'>ESCOLHER NOSSO SERVIÇO</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFICIÊNCIA:</b>
          <p>Agendamento de consultas simplificado que se adapta ao seu estilo de vida agitado.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIÊNCIA:</b>
          <p>Acesso a uma rede de profissionais de saúde confiáveis na sua área.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PESSOALIZAÇÃO:</b>
          <p>Recomendações e lembretes personalizados para ajudá-lo a acompanhar sua saúde.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
