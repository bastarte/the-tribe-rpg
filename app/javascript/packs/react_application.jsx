import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/App.jsx';


document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('data')
  const characters_data = JSON.parse(node.getAttribute('characters_data'))
  const characters_path_data = JSON.parse(node.getAttribute('characters_path_data'))

  ReactDOM.render(
    <App characters_data={characters_data} characters_path={characters_path_data}/>,
    document.body.appendChild(document.createElement('div')),
  )
})
