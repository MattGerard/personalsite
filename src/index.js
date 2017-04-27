import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/home';
import './styles/style.css';
import './img/favicon.ico';
ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
