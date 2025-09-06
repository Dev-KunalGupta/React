import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'

function MyApp(){
  return(
    <h1>I am Learning React</h1>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }
// Not work bcoz react is expecting a function not an object.

const anotherElement = (<a href="https://google.com" target='_blank'>Visit google</a>)

// Does it means if we wrap the html inside () braces then it will work as the function also returns in () ?

const reactElement = React.createElement(   // method to create elements
  'a',                                      // give the type
  {href: 'https://google.com', target: '_blank'}, // attributes
  'Click Here',                                   // value or child
  anotherElement                                  // Evaluated exp or variables
)

createRoot(document.getElementById('root')).render(
    reactElement,
    anotherElement,
    App(),
    MyApp()
)