import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename-"/TO-DO-LIST">
   <App />
  </BrowserRouter>
  
   
  
)
