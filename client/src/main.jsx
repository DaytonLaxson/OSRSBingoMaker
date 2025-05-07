import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './App.jsx'
import BingoBoard from './pages/CreateBoardPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BingoBoard />
  </StrictMode>,
)
