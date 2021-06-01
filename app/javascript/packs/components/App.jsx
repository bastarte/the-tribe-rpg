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
        {Object.keys(this.props.characters_data)
          .map(key => <Character
                                key = {key}
                                index = {key}
                                details = {this.props.characters_data[key]}
                                />
          )}
      </div>
    );
  }
}

export default App;
