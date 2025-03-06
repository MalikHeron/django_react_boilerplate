import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from '@router/Router'
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from "aos";
import "aos/dist/aos.css";

// init aos
AOS.init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
