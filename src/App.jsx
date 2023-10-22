import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>App.jsx-page</h2>
      
      <p>こちらは<code>src/App.jsx </code>を編集保存して HMR をテストする</p>
      <div className="card">
      押しボタンカウンター&emsp;
        <button onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
         
          <p>リロードなしに変更内容を確認できる。「Hot Module Replacement !」</p>
      </div>
      <p className="read-the-docs">
      詳細については、Vite および React のロゴをクリックしてください。
        
      </p>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  )
}

export default App
