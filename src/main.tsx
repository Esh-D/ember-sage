import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import { Routes, Route } from "react-router";
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'

//TODO: clean up file imports and refactor
//TODO: change image sources to use assets (rather than urls)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/ember-sage" element={<App />} />
          <Route path="/ember-sage/menu" element={<Menu />} />
          <Route path="/ember-sage/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
