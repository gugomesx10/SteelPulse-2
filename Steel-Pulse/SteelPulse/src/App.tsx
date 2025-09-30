import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './/routes/Home/Home';
import Doctors from './routes/Doctors/Doctors';
import Login from './routes/Login/Login';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Appointment from './routes/Appointment/Appointment';
import MyAppointments from './routes/Myappointments/MyAppointments';
import MyProfile from './routes/MyProfile/MyProfile';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './routes/Verify/Verify';

const App: React.FC = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;