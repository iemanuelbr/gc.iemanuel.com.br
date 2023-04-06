import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './app'

ReactDOM.createRoot(document.getElementById('header') as HTMLElement).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
)
