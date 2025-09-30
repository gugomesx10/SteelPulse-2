import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import "./globals.css";

import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './routes/Home/index.tsx';
import Consultas from '../src/routes/Consultas/index.tsx';
import Perfil from '../src/routes/Perfil/index.tsx';
import Saude from '../src/routes/Saude/index.tsx';
import Error from '../src/routes/Error/index.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/consultas", element: <Consultas /> },
      { path: "/perfil", element: <Perfil /> },
      { path: "/saude", element: <Saude /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,  
);
