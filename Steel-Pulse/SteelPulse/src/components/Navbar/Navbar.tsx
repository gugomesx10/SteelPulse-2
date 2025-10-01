import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'


interface AppContextType {
  token: string | boolean
  setToken: (token: string | boolean) => void
  userData: any
}

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext) as AppContextType

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo SteelPulse" />
      <ul className='md:flex items-center gap-5 font-medium hidden'>
          <NavLink to='/'>
            <li className='py-1 px-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md font-semibold tracking-wide transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:scale-105'>INÍCIO</li>
          </NavLink>
          <NavLink to='/doctors'>
            <li className='py-1 px-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md font-semibold tracking-wide transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:scale-105'>TODOS OS MÉDICOS</li>
          </NavLink>
          <NavLink to='/about'>
            <li className='py-1 px-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md font-semibold tracking-wide transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:scale-105'>SOBRE</li>
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1 px-4 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-md font-semibold tracking-wide transition-all duration-300 hover:from-blue-500 hover:to-blue-700 hover:scale-105'>CONTATO</li>
          </NavLink>
        {/* Foto de perfil estática no header */}
        <li className='ml-6 flex items-center relative'>
          <button
            className='focus:outline-none'
            onClick={() => setShowMenu((prev) => !prev)}
            aria-label='Abrir menu do perfil'
          >
            <img className='w-14 h-14 rounded-full border-2 border-primary cursor-pointer' src={assets.profile_pic} alt="Foto de perfil" />
          </button>
          {showMenu && (
            <div className='absolute right-0 top-16 min-w-48 bg-white rounded shadow-lg z-30 flex flex-col p-4 border border-gray-200'>
              <p className='font-semibold mb-2'>Meu Perfil</p>
              <p className='text-sm text-gray-600 mb-4'>Sou Gustavo Gomes, desenvolvedor responsável pelo projeto Steel Pulse.</p>
              <p className='text-sm text-gray-600 mb-4'>Sou aluno da Faculdade Fiap, faço parte da turma 1TDSPO.</p>
              <button
                className='bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition-all mb-2'
                onClick={() => navigate('/my-profile')}
              >Ver Perfil</button>
              <a
                href='https://github.com/gugomesx10'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-all mb-2 text-center'
              >GitHub</a>
              <button
                className='text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition-all'
                onClick={() => setShowMenu(false)}
              >Fechar</button>
            </div>
          )}
        </li>
      </ul>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-2.5' src={assets.dropdown_icon} alt="Ícone de menu" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>Meu Perfil</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>Minhas Consultas</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Sair</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Criar conta</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Abrir menu" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} className='w-36' alt="Logo SteelPulse" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="Fechar menu" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>INÍCIO</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded full inline-block'>TODOS OS MÉDICOS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded full inline-block'>SOBRE</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded full inline-block'>CONTATO</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar