import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import Base from './base/base.jsx'

ReactDom.render(
  <Base />,
  document.getElementById('app')
);
