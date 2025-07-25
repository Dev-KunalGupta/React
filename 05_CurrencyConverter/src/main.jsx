import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

createRoot(document.getElementById('root')).render(
    <useCurrencyInfo currency="usd"/>,
    <App />
)
