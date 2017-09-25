import React, {Component} from 'react'
import min from './resize-100.svg'
import max from './resize-full-screen.svg'
import './resize.css'
import Analytics from '../helpers/Analytics'

class Resize extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (evt) {
    evt.preventDefault()
    Analytics.track(`Confluence.Resize${this.props.size}`)
    this.props.action(evt)
  }

  render () {
    const icon = this.props.size === 'max' ? min : max
    return (
      <a
        className={`resize ${this.props.size}`}
        onClick={this.handleClick.bind(this)}>
        <span className="size">
          <img src={icon} width="20" height="20" alt="Resize" />
        </span>
      </a>
    )
  }
}

export default Resize
