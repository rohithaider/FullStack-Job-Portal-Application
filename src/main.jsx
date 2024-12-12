import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router'; 



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
