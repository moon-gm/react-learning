import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import Function from './component/sample/sampleFunctionComponent.js';
import Class from './component/sample/sampleClassComponent.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Function />
	<Class />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
