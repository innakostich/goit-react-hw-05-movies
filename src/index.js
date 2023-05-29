

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route } from 'react-router-dom';
// import App from './components/App';
// import './index.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Route component={App} />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
