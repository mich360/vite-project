import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{
      backgroundColor: '#055a7f',
      padding: '1rem'
    }}>
      <nav style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center'
      }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
          Home
        </Link>

        <Link to="/canape" style={{ color: 'white', textDecoration: 'none' }}>
          Canape
        </Link>

        <Link to="/start" style={{ color: 'white', textDecoration: 'none' }}>
          Start
        </Link>

        <Link to="/vite" style={{ color: 'white', textDecoration: 'none' }}>
          Vite
        </Link>
      </nav>
    </header>
  )
}
