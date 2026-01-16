import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // ← 全体スタイルが不要なら削除OK

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
