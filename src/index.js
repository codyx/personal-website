// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import App from './appv2/App';

const root = document.getElementById('root');

if (root != null) {
    ReactDOM.render(<App />, root);
}
