import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import {Section, Footer} from './Header.jsx'
import './index.css'






ReactDOM.createRoot(document.getElementById('container-general')).render(
  <React.StrictMode>
   
    <Header />
    <Section />
    <Footer/>

  </React.StrictMode>,
)



