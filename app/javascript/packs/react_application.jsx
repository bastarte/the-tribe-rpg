import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/App.jsx';


document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('characters_data')
  const characters = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <App characters={characters} />,
    document.body.appendChild(document.createElement('div')),
  )
})
