import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import type { AppContextType } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface Appointment {
  _id: string;
  docData: {
    image: string;
    name: string;
    speciality: string;
    address: {
      line1: string;
      line2: string;
    };
  };
  slotDate: string;
  slotTime: string;
  cancelled?: boolean;
  payment?: boolean;
  isCompleted?: boolean;
}

const MyAppointments: React.FC = () => {
  const context = useContext(AppContext) as AppContextType | undefined;
  const backendUrl = context?.backendUrl ?? '';
  const token = context?.token ?? '';
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [payment, setPayment] = useState('');

  const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

  const slotDateFormat = (slotDate: string) => {
    const dateArray = slotDate.split('_');
    return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } });
      setAppointments(data.appointments.reverse());
    } catch (error) {
      console.log(error);
      if (typeof error === "object" && error !== null && "message" in error) {
        toast.error((error as { message: string }).message);
      } else {
        toast.error("Ocorreu um erro desconhecido.");
      }
    }
  };

  const cancelAppointment = async (appointmentId: string) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } });
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      if (typeof error === "object" && error !== null && "message" in error) {
        toast.error((error as { message: string }).message);
      } else {
        toast.error("Ocorreu um erro desconhecido.");
      }
    }
  };

  const initPay = (order: any) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Pagamento de Consulta',
      description: "Pagamento de Consulta",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response: any) => {
        try {
          const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
          if (data.success) {
            navigate('/my-appointments');
            getUserAppointments();
          }
        } catch (error) {
          console.log(error);
          if (typeof error === "object" && error !== null && "message" in error) {
            toast.error((error as { message: string }).message);
          } else {
            toast.error("Ocorreu um erro desconhecido.");
          }
        }
      }
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorpay = async (appointmentId: string) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } });
      if (data.success) {
        initPay(data.order);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      if (typeof error === "object" && error !== null && "message" in error) {
        toast.error((error as { message: string }).message);
      } else {
        toast.error("Ocorreu um erro desconhecido.");
      }
    }
  };

  const appointmentStripe = async (appointmentId: string) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } });
      if (data.success) {
        const { session_url } = data;
        window.location.replace(session_url);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      if (typeof error === "object" && error !== null && "message" in error) {
        toast.error((error as { message: string }).message);
      } else {
        toast.error("Ocorreu um erro desconhecido.");
      }
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>
      <p className='pb-3 mt-12 text-lg font-medium text-gray-600 border-b'>Minhas consultas</p>
      <div>
        {appointments.map((item, index) => (
          <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-4 border-b'>
            <div>
              <img className='w-36 bg-[#EAEFFF]' src={item.docData.image} alt="Imagem do médico" />
            </div>
            <div className='flex-1 text-sm text-[#5E5E5E]'>
              <p className='text-[#262626] text-base font-semibold'>{item.docData.name}</p>
              <p>{item.docData.speciality}</p>
              <p className='text-[#464646] font-medium mt-1'>Endereço:</p>
              <p>{item.docData.address.line1}</p>
              <p>{item.docData.address.line2}</p>
              <p className='mt-1'><span className='text-sm text-[#3C3C3C] font-medium'>Data & Hora:</span> {slotDateFormat(item.slotDate)} | {item.slotTime}</p>
            </div>
            <div className='flex flex-col gap-2 justify-end text-sm text-center'>
              {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
                <button onClick={() => setPayment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pagar online</button>
              )}
              {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                <button onClick={() => appointmentStripe(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'>
                  <img className='max-w-20 max-h-5' src={assets.stripe_logo} alt="Logo do Stripe" />
                </button>
              )}
              {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                <button onClick={() => appointmentRazorpay(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-gray-100 hover:text-white transition-all duration-300 flex items-center justify-center'>
                  <img className='max-w-20 max-h-5' src={assets.razorpay_logo} alt="Logo do Razorpay" />
                </button>
              )}
              {!item.cancelled && item.payment && !item.isCompleted && (
                <button className='sm:min-w-48 py-2 border rounded text-[#696969] bg-[#EAEFFF]'>Pago</button>
              )}
              {item.isCompleted && (
                <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Concluído</button>
              )}
              {!item.cancelled && !item.isCompleted && (
                <button onClick={() => cancelAppointment(item._id)} className='text-[#696969] sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancelar consulta</button>
              )}
              {item.cancelled && !item.isCompleted && (
                <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Consulta cancelada</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;