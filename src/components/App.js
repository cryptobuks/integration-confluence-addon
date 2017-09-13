import React, { Component } from 'react'
import Thumb from './Thumb'
import Link from './Link'
import ErrorMessage from './ErrorMessage'
import './app.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      previewImgUrl: '',
      projectName: '',
      shareUrl: '',
      err: ''
    }
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

  render() {
    if (this.state.err) {
      return (
        <div className='app ac-content'>
          <ErrorMessage url={this.props.match.params.shareUrl} />
        </div>
      )
    }

    return (
      <div className='app ac-content'>
        <Thumb
          previewImgUrl={this.state.previewImgUrl}
          projectName={this.state.projectName}
          shareUrl={this.state.shareUrl} />
        <Link shareUrl={this.state.shareUrl} />
      </div>
    )
  }
}

export default App
