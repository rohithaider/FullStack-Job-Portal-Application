import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/router'; 
import { ThemeProvider } from "@material-tailwind/react";




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </ThemeProvider>
    
  </StrictMode>,
)
