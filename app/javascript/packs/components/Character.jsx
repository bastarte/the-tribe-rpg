import React from "react";

class Character extends React.Component {

  render() {
    console.log(this.props.details);
    const {name, attack, defense, health, magic, skill, rank, next_time } = this.props.details ;

    return (
        <div className="char-card">
          <div className="char-avatar">
            <img src="/assets/avatar-pikachu.png" className="img-fluid" alt="Fighter avatar" width="100" height="100"/>
          </div>
          <div className="char-content">
            <div className="char-name">
              <h3> {name || "The fighter without a name"} </h3>
            </div>
            <div className="char-skills">
              <span className="skill">A: {attack} </span>
              <span className="skill">D: {defense} </span>
              <span className="skill">M: {magic} </span>
              <span className="skill">H: {health} </span>
              <span className="skill">?: {skill} </span>
            </div>
          </div>
          <div className="char-actions">
            <button type="button" className="btn btn-dark btn-sm btn-block">🖊️Edit</button>
            <button type="button" className="btn btn-dark btn-sm btn-block">⚡Fight</button>
          </div>
        </div>
    )
  }
}
export default Character;
