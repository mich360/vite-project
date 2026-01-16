import React from 'react';

function Canape() {
  return (
    <section className="canape">
      <h1>🍷 Canape ページ</h1>

      <p>
        このページは <code>Canape.jsx</code> で作られた React コンポーネントです。
      </p>

      <p>
        Vite + React を使って、ページ単位のコンポーネントを作成しています。
      </p>

      <nav>
        <ul>
          <li>
            <a href="/">🏠 Home に戻る</a>
          </li>
          <li>
            <a
              href="https://canape2020.stars.ne.jp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Canape 公式サイト
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Canape;
