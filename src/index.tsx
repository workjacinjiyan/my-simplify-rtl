import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import App from './App';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('src/__mocks__/browser');
//   worker.start();
// }


const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
