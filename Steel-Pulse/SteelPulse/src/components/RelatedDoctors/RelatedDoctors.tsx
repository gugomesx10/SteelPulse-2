import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

interface Doctor {
  _id: string
  name: string
  image: string
  speciality: string
}

interface Props {
  speciality: string
  docId: string
}

interface AppContextType {
  doctors: Doctor[]
  
}

const RelatedDoctors: React.FC<Props> = ({ speciality, docId }) => {
  const navigate = useNavigate()
  const { doctors } = useContext(AppContext) as AppContextType

  const [relDoc, setRelDoc] = useState<Doctor[]>([])

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter((doc: Doctor) => doc.speciality === speciality && doc._id !== docId)
      setRelDoc(doctorsData)
    }
  }, [doctors, speciality, docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-[#262626]'>
      <h1 className='text-3xl font-medium'>Médicos Relacionados</h1>
      <p className='sm:w-1/3 text-center text-sm'>Navegue pela nossa lista de médicos de confiança.</p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relDoc.map((item, index) => (
          <div
            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }}
            className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img className='bg-[#EAEFFF]' src={item.image} alt={item.name} />
            <div className='p-4'>
              <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <button className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>mais</button> */}
    </div>
  )
}

export default RelatedDoctors