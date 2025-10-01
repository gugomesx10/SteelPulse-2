import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { assets } from '../../assets/assets';
import RelatedDoctors from '../../components/RelatedDoctors/RelatedDoctors';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Doctor {
  _id: string;
  name: string;
  speciality: string;
  image: string;
  degree?: string;
  experience?: string;
  about?: string;
  fees?: number;
  slots_booked?: {
    [date: string]: string[];
  };
}

const Appointment = () => {
  const { docId } = useParams<{ docId: string }>();
  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const { doctors, currencySymbol, backendUrl, token } = appContext;
  const daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

  const [docInfo, setDocInfo] = useState<Doctor | null>(null);
  const [docSlots, setDocSlots] = useState<Array<Array<{ datetime: Date; time: string }>>>([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0) {
      const foundDoc = doctors.find((doc) => doc._id === docId);
      setDocInfo(foundDoc ? { ...foundDoc, slots_booked: (foundDoc as any).slots_booked || {} } : null);
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (!docInfo) return;
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots: { datetime: Date; time: string }[] = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        const slotDate = day + '_' + month + '_' + year;
        const slotTime = formattedTime;
        const isSlotAvailable = !docInfo.slots_booked || !docInfo.slots_booked[slotDate] || !docInfo.slots_booked[slotDate].includes(slotTime);
        if (isSlotAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  }, [docInfo]);

  const bookAppointment = async () => {
    if (!token) {
      toast.warning('Faça login para agendar uma consulta');
      return navigate('/login');
    }
    if (!docSlots[slotIndex] || !docSlots[slotIndex][0]) {
      toast.error('Selecione um horário disponível.');
      return;
    }
    const date = docSlots[slotIndex][0].datetime;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const slotDate = day + '_' + month + '_' + year;
    try {
      const { data } = await axios.post(
        backendUrl + '/api/user/book-appointment',
        { docId, slotDate, slotTime },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        navigate('/my-appointments');
      } else {
        toast.error(data.message);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (!docInfo) return null;

  return (
    <div>
      {/* ---------- Detalhes do Médico ----------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>
        <div className='flex-1 border border-[#ADADAD] rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-3xl font-medium text-gray-700'>
            {docInfo.name} <img className='w-5' src={assets.verified_icon} alt='verificado' />
          </p>
          <div className='flex items-center gap-2 mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-[#262626] mt-3'>
              Sobre <img className='w-3' src={assets.info_icon} alt='info' />
            </p>
            <p className='text-sm text-gray-600 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-600 font-medium mt-4'>
            Taxa de consulta: <span className='text-gray-800'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      {/* Horários disponíveis */}
      <div className='sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]'>
        <p>Horários disponíveis</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div
              onClick={() => setSlotIndex(index)}
              key={index}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-[#DDDDDD]'}`}
            >
              <p>{item[0] ? daysOfWeek[item[0].datetime.getDay()] : ''}</p>
              <p>{item[0] ? item[0].datetime.getDate() : ''}</p>
            </div>
          ))}
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length > 0 && docSlots[slotIndex] && docSlots[slotIndex].map((item, index) => (
            <p
              onClick={() => setSlotTime(item.time)}
              key={index}
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-[#949494] border border-[#B4B4B4]'}`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button
          onClick={bookAppointment}
          className='bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6'
        >
          Agendar consulta
        </button>
      </div>
      {/* Médicos relacionados */}
      <RelatedDoctors speciality={docInfo.speciality || ''} docId={docId || ''} />
    </div>
  );
};

export default Appointment;