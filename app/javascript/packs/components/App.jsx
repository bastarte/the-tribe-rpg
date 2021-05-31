import React from 'react';
import ReactDOM from 'react-dom';
import Character from './Character';


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
      <div className="app">
        {Object.keys(this.props.characters)
          .map(key => <Character
                                key = {key}
                                index = {key}
                                details = {this.props.characters[key]}
                                />
          )}
      </div>
    );
  }
}

export default App;
