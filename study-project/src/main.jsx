import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppClass from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppClass/>
  </StrictMode>,
)
