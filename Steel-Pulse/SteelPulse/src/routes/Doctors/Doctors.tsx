
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

interface Doctor {
  _id: string;
  name: string;
  speciality: string;
  image: string;
  available?: boolean;
}

interface AppContextType {
  doctors: Doctor[];
}

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState<Doctor[]>([]);
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext) as AppContextType

  useEffect(() => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }, [speciality, doctors])

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
  <p className='text-gray-600'>Navegue pelos médicos especialistas.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm  transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Clínico Geral' ? navigate('/doctors') : navigate('/doctors/Clínico Geral')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Clínico Geral' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Clínico Geral</p>
          <p onClick={() => speciality === 'Ginecologista' ? navigate('/doctors') : navigate('/doctors/Ginecologista')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Ginecologista' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Ginecologista</p>
          <p onClick={() => speciality === 'Dermatologista' ? navigate('/doctors') : navigate('/doctors/Dermatologista')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologista' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Dermatologista</p>
          <p onClick={() => speciality === 'Pediatra' ? navigate('/doctors') : navigate('/doctors/Pediatra')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatra' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Pediatra</p>
          <p onClick={() => speciality === 'Neurologista' ? navigate('/doctors') : navigate('/doctors/Neurologista')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologista' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Neurologista</p>
          <p onClick={() => speciality === 'Gastroenterologista' ? navigate('/doctors') : navigate('/doctors/Gastroenterologista')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologista' ? 'bg-[#E2E5FF] text-black ' : ''}`}>Gastroenterologista</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDoc.map((item, index) => (
            <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
              <img className='bg-[#EAEFFF]' src={item.image} alt="" />
              <div className='p-4'>
                <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p>
                  <p>{item.available ? 'Disponível' : 'Indisponível'}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors