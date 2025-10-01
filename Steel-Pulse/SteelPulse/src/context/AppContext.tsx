import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { doctors as localDoctors } from '../assets/assets'

import type { ReactNode } from 'react'

interface Doctor {
    _id: string;
    name: string;
    speciality: string;
    image: string;
    available?: boolean;
}

interface AppContextType {
    doctors: Doctor[];
    currencySymbol: string;
    backendUrl: string;
    token: string;
    setToken: (token: string) => void;
    userData: any;
    setUserData: (data: any) => void;
    loadUserProfileData: () => Promise<void>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined)

interface Props {
    children: ReactNode;
}

const AppContextProvider = ({ children }: Props) => {

    const currencySymbol = '₹'
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors] = useState<Doctor[]>(localDoctors)
    const [token, setToken] = useState<string>(localStorage.getItem('token') || '')
    const [userData, setUserData] = useState(false)

    
    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-profile', { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }
        } catch (error: any) {
            console.log(error)
            toast.error(error.message)
        }
    }

    

    useEffect(() => {
        if (token) {
            loadUserProfileData()
        }
    }, [token])

    const value: AppContextType = {
        doctors,
        currencySymbol,
        backendUrl,
        token, setToken,
        userData, setUserData, loadUserProfileData
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider