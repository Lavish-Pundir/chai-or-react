import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
  return(
    <div>
      <h1>Custom App | Chai</h1>
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click me to Visit google'
)

ReactDOM.createRoot(document.getElementById('root')).
render(
  // reactElement
  <App/>
    
)
