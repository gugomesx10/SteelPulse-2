import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import type { AppContextType } from '../../context/AppContext';
import { toast } from 'react-toastify';

const Verify: React.FC = () => {
    const [searchParams] = useSearchParams();

    const success = searchParams.get("success");
    const appointmentId = searchParams.get("appointmentId");

    const context = useContext(AppContext) as AppContextType | undefined;
    const backendUrl = context?.backendUrl ?? '';
    const token = context?.token ?? '';

    const navigate = useNavigate();

    const verifyStripe = async () => {
        try {
            const { data } = await axios.post(
                `${backendUrl}/api/user/verifyStripe`,
                { success, appointmentId },
                { headers: { token } }
            );

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }

            navigate("/my-appointments");
        } catch (error) {
            if (typeof error === "object" && error !== null && "message" in error) {
                toast.error((error as { message: string }).message);
            } else {
                toast.error("Ocorreu um erro desconhecido.");
            }
            console.log(error);
        }
    };

    useEffect(() => {
        if (token && appointmentId && success) {
            verifyStripe();
        }
    }, [token, appointmentId, success]);

    return (
        <div className='min-h-[60vh] flex items-center justify-center'>
            <div className="w-20 h-20 border-4 border-gray-300 border-t-4 border-t-primary rounded-full animate-spin"></div>
        </div>
    );
};

export default Verify;