import React from 'react'

export default function Header() {
  return (
    <header style={{ backgroundColor: '#055a7f', padding: '1rem' }}>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <a href="index.html" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
        <a href="canape.html" style={{ color: 'white', textDecoration: 'none' }}>Canape</a>
        <a href="start.html" style={{ color: 'white', textDecoration: 'none' }}>Start</a>
        <a href="vite.html" style={{ color: 'white', textDecoration: 'none' }}>Vite</a>
      </nav>
    </header>
  )
}
