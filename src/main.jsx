// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// 直し11/1
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // このパスはプロジェクト構造に合わせて変更してください
import './index.css'; // 同様にパスを変更してください

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import ReactDOM from 'react-dom';





// ReactDOM.render(imageElement, document.getElementById('image-container'));

// // 画像を表示する
// const imageElement = <img src={queenImage} alt="Queen Image" />;
// render(imageElement, document.getElementById('image-container'));

