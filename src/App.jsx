import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ページタイトル */}
      <h1>Vite + React 🚀</h1>
      <h2>App.jsx page</h2>

      {/* 説明 */}
      <p>
        こちらは <code>src/App.jsx</code> を編集・保存して
        <strong> HMR（Hot Module Replacement）</strong> を確認するページです。
      </p>

      {/* カウンター */}
      <div className="card">
        <p>押しボタンカウンター</p>
        <button onClick={() => setCount((c) => c + 1)}>
          count: {count}
        </button>

        <p>
          リロードなしに変更内容を確認できます。
          <br />
          「Hot Module Replacement」
        </p>
      </div>

      {/* ロゴ */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <p className="read-the-docs">
        詳細については、Vite および React のロゴをクリックしてください。
      </p>

      {/* 外部リンク */}
      <div className="canape">
        <p className="read-the-docs">
          JavaScript のサンプルを見るにはクリックしてください。
        </p>

        <a
          href="https://canape2020.stars.ne.jp/script/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/canape.png" alt="Canape Image" width={300} />
        </a>
      </div>

      <p>ここは App.jsx です</p>

      {/* 👇 共通 Footer */}
      <Footer />
    </>
  )
}

export default App
