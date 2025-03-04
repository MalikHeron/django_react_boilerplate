import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from '@router/Router'
import 'bootstrap-icons/font/bootstrap-icons.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
