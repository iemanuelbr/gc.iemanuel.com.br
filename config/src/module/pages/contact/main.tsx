import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contact } from './app'

ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
)
