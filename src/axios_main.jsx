import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AxiosApp from './AxiosApp.jsx'

createRoot(document.getElementById('axios-root')).render(
  <StrictMode>
    <AxiosApp />
  </StrictMode>,
)
