import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [state, setState] = useState('Cadastrar');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { backendUrl, token, setToken } = useContext(AppContext);

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (state === 'Cadastrar') {
      const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    } else {
      const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });

      if (data.success) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
      } else {
        toast.error(data.message);
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Cadastrar' ? 'Criar Conta' : 'Login'}</p>
        <p>{`Por favor ${state === 'Cadastrar' ? 'se registre' : 'faça login'} para agendar consulta`}</p>
        {state === 'Cadastrar' ? (
          <div className='w-full '>
            <p>Nome completo</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
        ) : null}
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Senha</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state === 'Cadastrar' ? 'Criar conta' : 'Login'}</button>
        {state === 'Cadastrar' ? (
          <p>Já tem uma conta? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Faça login aqui</span></p>
        ) : (
          <p>Não tem uma conta? <span onClick={() => setState('Cadastrar')} className='text-primary underline cursor-pointer'>Clique aqui</span></p>
        )}
      </div>
    </form>
  );
};

export default Login;
