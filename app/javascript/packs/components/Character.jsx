import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello3 = props => (
  <div>Hello {props.name}!</div>
)

Hello3.defaultProps = {
  name: 'David'
}

Hello3.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello3 name="js6" />,
    document.body.appendChild(document.createElement('div')),
  )
})
