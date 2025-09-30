import React from 'react';
import { assets } from '../../assets/assets';

const Header: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-primary rounded-2xl shadow-lg px-6 md:px-12 lg:px-20 py-10 md:py-16 mt-6 mb-10">
            {/* Lado Esquerdo */}
            <div className="md:w-1/2 flex flex-col gap-6 items-start justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight text-center md:text-left">
                    Agendar Consulta <br /> Com Médicos Confiáveis
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-4 text-white text-base font-light">
                    <img className="w-24 md:w-32" src={assets.group_profiles} alt="Perfis de Médicos" />
                    <p className="text-center md:text-left">
                        Explore nossa lista extensa de médicos confiáveis,<br className="hidden sm:block" />
                        agende sua consulta sem complicações.
                    </p>
                </div>
                <a
                    href="#speciality"
                    className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-primary font-semibold text-base shadow hover:scale-105 hover:bg-gray-100 transition-all duration-200 mx-auto md:mx-0"
                >
                    Agendar consulta
                    <img className="w-4" src={assets.arrow_icon} alt="Ícone de seta" />
                </a>
            </div>
            {/* Lado Direito */}
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                <img
                    className="w-full max-w-md rounded-2xl shadow-lg object-cover"
                    src={assets.header_img}
                    alt="Imagem do cabeçalho"
                />
            </div>
        </div>
    );
};

export default Header;