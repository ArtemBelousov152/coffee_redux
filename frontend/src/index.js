import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>
);

