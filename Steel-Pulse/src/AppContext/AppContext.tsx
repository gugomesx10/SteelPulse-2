import { createContext, useEffect, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

interface Doctor {
  _id: string;
  name: string;
  speciality: string;
  image: string;
  available: boolean;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
  };
  gender: string;
  dob: string;
  image: string;
}

interface AppContextType {
  doctors: Doctor[];
  getDoctosData: () => void;
  currencySymbol: string;
  backendUrl: string;
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  userData: UserData | false;
  setUserData: React.Dispatch<React.SetStateAction<UserData | false>>;
  loadUserProfileData: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = (props) => {
  const currencySymbol = '₹';
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [userData, setUserData] = useState<UserData | false>(false);

  // Obtendo dados dos médicos via API
  const getDoctosData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctor/list`);
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Obtendo dados do perfil do usuário via API
  const loadUserProfileData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/get-profile`, { headers: { token } });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDoctosData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token]);

  const value = {
    doctors,
    getDoctosData,
    currencySymbol,
    backendUrl,
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
