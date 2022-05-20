import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';

import { Provider } from 'react-redux';

import App from './App';
import store from './store';

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('src/__mocks__/browser');
//   worker.start();
// }


const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
