import React, { Component } from 'react'
import Max from './Max'
import Min from './Min'
import Resize from './Resize'
import Link from './Link'
import ErrorMessage from './ErrorMessage'
import './app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previewImgUrl: '',
      projectName: '',
      shareUrl: '',
      size: 'min',
      err: ''
    }
    this.toggleSize = this.toggleSize.bind(this)
  }

  componentDidMount() {
    const {apiUrl} = this.props.config
    const req = new Request(`${apiUrl}/api/share/${this.props.match.params.shareUrl}`)
    fetch(req)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(response.statusText)
      })
      .then(data => {
        const {previewImgUrl, projectName, shareUrl} = data
        this.setState({
          previewImgUrl,
          projectName,
          shareUrl
        })
      })
      .catch(err => {
        this.setState({
          err
        })
      })
  }

  toggleSize(evt) {
    const newSize = this.state.size === 'max' ? 'min' : 'max'
    this.setState({
      'size': newSize
    })
  }

  render() {
    if (this.state.err) {
      return (
        <div className="app ac-content">
          <ErrorMessage url={this.props.match.params.shareUrl} />
        </div>
      )
    }

    const Component = this.state.size === 'max' ? Max : Min
    return (
      <div className={`app ac-content ${this.state.size}`}>
        <Component
          previewImgUrl={this.state.previewImgUrl}
          projectName={this.state.projectName}
          shareUrl={this.state.shareUrl} />
        <div className="tools">
          <Resize size={this.state.size} action={this.toggleSize} />
          <Link shareUrl={this.state.shareUrl} />
        </div>
      </div>
    )
  }
}

export default App
