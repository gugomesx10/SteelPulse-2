import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AppContextProvider from './context/AppContext';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home/Home.tsx';
import Doctors from './routes/Doctors/Doctors.tsx';
import About from './routes/About/About.tsx';
import Contact from './routes/Contact/Contact.tsx';
import Appointment from './routes/Appointment/Appointment.tsx';
import MyAppointments from './routes/MyAppointments/MyAppointments.tsx';
import MyProfile from './routes/MyProfile/MyProfile.tsx';
import Login from './routes/Login/Login.tsx';
import Verify from './routes/Verify/Verify.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/doctors', element: <Doctors /> },
      { path: '/doctors/:speciality', element: <Doctors /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/appointment/:docId', element: <Appointment /> },
      { path: '/my-appointments', element: <MyAppointments /> },
      { path: '/my-profile', element: <MyProfile /> },
      { path: '/login', element: <Login /> },
      { path: '/verify', element: <Verify /> }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);