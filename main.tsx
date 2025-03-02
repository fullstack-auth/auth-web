import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { BrowserRouter } from 'react-router-dom';
// import store from './src/store/store';
// import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  // <Provider store={store}>  {/* Wrapping the App with Provider */}
  // </Provider>
      <App />
);
