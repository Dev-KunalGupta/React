import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>I am Learning React</h1>
  )
}

createRoot(document.getElementById('root')).render(
    App(),
    MyApp()
)
