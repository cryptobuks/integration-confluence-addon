import React, { Component } from 'react'
import Analytics from '../helpers/Analytics'

class Thumb extends Component {
  constructor (props) {
    super(props)
    this.resizeImage = this.resizeImage.bind(this)
  }

  resizeImage () {
    window.AP.resize('100%', this.thumb.naturalHeight)
  }

  render () {
    const {previewImgUrl, projectName, shareUrl} = this.props
    return (
      <a
        href={shareUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={ () => Analytics.track('Confluence.ThumbClicked') }>
        <img
          ref={el => { this.thumb = el }}
          src={previewImgUrl}
          alt={projectName}
          onLoad={this.resizeImage} />
      </a>
    )
  }
}

export default Thumb
