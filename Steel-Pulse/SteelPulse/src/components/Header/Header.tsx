import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 '>
            {/* --------- Header Top: Título + Menu + Foto --------- */}
            <div className='flex items-center justify-between w-full py-4 md:py-0'>
                <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    Agende sua Consulta <br /> Com Médicos de Confiança
                </p>
                <div className='flex items-center gap-4 ml-4'>
                    <img src={assets.menu_icon} alt='Menu' className='w-8 h-8 cursor-pointer md:hidden' />
                </div>
            </div>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                    <img className='w-14 h-14 rounded-full border-1 border-primary cursor-pointer' src={assets.group_profiles} alt="Grupo de médicos" />
                    <p>Navegue pela nossa lista de médicos de confiança e agende sua consulta sem complicações.</p>
                </div>
                <a
                    href='#speciality'
                    className='flex items-center gap-2 bg-gradient-to-r from-primary to-blue-400 text-white text-sm px-8 py-3 rounded-full m-auto md:m-0 shadow-lg font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-primary hover:shadow-xl hover:ring-2 hover:ring-blue-200 focus:outline-none focus:ring-2 focus:ring-primary'
                >
                    Agendar consulta <img className='w-3' src={assets.arrow_icon} alt="Seta para agendar" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Imagem de cabeçalho" />
            </div>
        </div>
    )
}

export default Header