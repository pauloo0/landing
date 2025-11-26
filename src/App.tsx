import { Route, Routes } from 'react-router-dom'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

import Privacy from '@/pages/Privacy'
import ToS from '@/pages/ToS'

function App() {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <Header />
            <Hero />
            <Features />
            <Pricing />
            <Footer />
          </div>
        }
      />
      <Route path='/tos' element={<ToS />} />
      <Route path='/privacy' element={<Privacy />} />
    </Routes>
  )
}

export default App
