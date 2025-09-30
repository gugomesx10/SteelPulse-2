import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

interface AppContextType {
  token: string | null;
  setToken: (token: string | false) => void;
  userData: {
    image: string;
    [key: string]: any;
  } | null;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext) as AppContextType;

  const logout = () => {
    localStorage.removeItem('token');
    setToken(false);
    navigate('/login');
  }

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD] max-w-6xl mx-auto px-4 sm:px-8">
      <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Logo" />
      <ul className="md:flex items-start gap-5 font-medium hidden">
        <NavLink to="/"><li className="py-1">INÍCIO</li></NavLink>
        <NavLink to="/doctors"><li className="py-1">TODOS OS MÉDICOS</li></NavLink>
        <NavLink to="/about"><li className="py-1">SOBRE</li></NavLink>
        <NavLink to="/contact"><li className="py-1">CONTATO</li></NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
          token && userData
            ? <div className="flex items-center gap-2 cursor-pointer group relative">
                <img className="w-8 rounded-full" src={userData.image} alt="Imagem do usuário" />
                <img className="w-2.5" src={assets.dropdown_icon} alt="Ícone de menu" />
                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                  <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                    <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">Meu Perfil</p>
                    <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">Minhas Consultas</p>
                    <p onClick={logout} className="hover:text-black cursor-pointer">Sair</p>
                  </div>
                </div>
              </div>
            : <button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">Criar conta</button>
        }
        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="Ícone de menu" />
        {/* ---- Menu Mobile ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className="flex items-center justify-between px-5 py-6">
            <img src={assets.logo} className="w-36" alt="Logo" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className="w-7" alt="Ícone de fechar" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/"><p className="px-4 py-2 rounded-full inline-block">INÍCIO</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors"><p className="px-4 py-2 rounded-full inline-block">TODOS OS MÉDICOS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about"><p className="px-4 py-2 rounded-full inline-block">SOBRE</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact"><p className="px-4 py-2 rounded-full inline-block">CONTATO</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;