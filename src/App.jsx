import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import Fiction from './pages/books/Fiction'
import Nonfiction from './pages/books/Nonfiction'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="fiction" element={<Fiction />} />
          <Route path="nonfiction" element={<Nonfiction />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
