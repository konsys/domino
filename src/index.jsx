import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <Game />
  </HashRouter>,
  document.getElementById('react-app-root')
);

/*eslint-disable */
if (module.hot) {
  module.hot.accept();
}
/*eslint-disable */
