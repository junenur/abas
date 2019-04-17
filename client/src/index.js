import React from 'react';
import ReactDOM from 'react-dom';
import shades from '@bupa-digital/shades/react';
import 'features/site-ui/styles.css';

const App = () => {
  return <div>Hello June</div>;
};

const domNode = document.querySelector('#root');
ReactDOM.render(
  <shades.Provider to={domNode} showDebug>
    <App />
  </shades.Provider>,
  document.querySelector('#root')
);
