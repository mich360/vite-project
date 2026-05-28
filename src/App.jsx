import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function Home() {
  return <p>ここが表示されれば React は正常です</p>
}

function Canape() {
  return <p>Canape ページです</p>
}

function Start() {
  return <p>Start ページです</p>
}

function VitePage() {
  return <p>Vite プロジェクトページです</p>
}

function App() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Test Page</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/canape" element={<Canape />} />
        <Route path="/start" element={<Start />} />
        <Route path="/vite" element={<VitePage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
