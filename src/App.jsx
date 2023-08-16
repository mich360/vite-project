import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React！やったね</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR </p>
          <p> src/App.jsx を編集して HMR をテストするために保存します</p>
          <p>「Hot Module Replacement」リロードなしに変更内容を確認できる。</p>
      </div>
      <p className="read-the-docs">
      詳細については、Vite および React のロゴをクリックしてください。
        
      </p>
      <p>ここはApp.jsx です</p>
    </>
  )
}

export default App
