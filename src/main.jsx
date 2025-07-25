import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TodoProvider } from './context/TodoProvider.jsx'

createRoot(document.getElementById('root')).render(
 
    <TodoProvider>
       <StrictMode>
    <App />
    </StrictMode>
    </TodoProvider>

)
