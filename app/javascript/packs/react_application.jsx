import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import NotFound from './components/NotFound';

class App extends React.Component {

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <NotFound tagline="From Wes Cos to Es Cos" />
          <div className="container">
            <div className="char-card">
              <div className="char-avatar">
              </div>
              <div className="char-content">
                <div className="char-name">
                </div>
                <div className="char-skills">

                </div>
              </div>
              <div className="char-actions">
                <button type="button" className="btn btn-dark btn-sm btn-block">🖊️Edit</button>
                <button type="button" className="btn btn-dark btn-sm btn-block">⚡Fight</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('characters_data')
  const data = JSON.parse(node.getAttribute('data'))
  ReactDOM.render(
    <App data={data} />,
    document.body.appendChild(document.createElement('div')),
  )
})
