import React, { Component } from 'react'
import Analytics from '../helpers/Analytics'
import './thumb.css'

class Thumb extends Component {
  constructor (props) {
    super(props)
    this.resizeImage = this.resizeImage.bind(this)
  }

  resizeImage (evt) {
    if (this.props.maximized) {
      window.AP.resize('100%', evt.currentTarget.naturalHeight)
    } else {
      window.AP.resize('600px', '100%')
    }
  }

  render () {
    const {previewImgUrl, projectName, shareUrl} = this.props
    return (
      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => Analytics.track('Confluence.ThumbClicked')}>
        <img
          className="thumb"
          src={previewImgUrl}
          alt={projectName}
          onLoad={this.resizeImage} />
      </a>
    )
  }
}

export default Thumb
