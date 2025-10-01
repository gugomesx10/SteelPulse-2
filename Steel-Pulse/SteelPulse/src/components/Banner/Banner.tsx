import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

        return (
            <div className='flex bg-primary rounded-lg  px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
                {/* ------- Lado Esquerdo ------- */}
                <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                    <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                        <p>Agende sua Consulta</p>
                        <p className='mt-4'>Com mais de 100 médicos de confiança</p>
                    </div>
                    <button
                        onClick={() => { navigate('/login'); scrollTo(0, 0) }}
                        className='bg-gradient-to-r from-primary to-blue-400 text-white text-sm sm:text-base px-8 py-3 rounded-full mt-6 shadow-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-primary hover:shadow-xl hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-primary'
                    >
                        Criar conta
                    </button>
                </div>
                {/* ------- Lado Direito ------- */}
                <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                    <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="Imagem de agendamento" />
                </div>
            </div>
        )
}

export default Banner