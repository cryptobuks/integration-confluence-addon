import React from 'react'
import Thumb from './Thumb'
import './max.css'

const Max = ({previewImgUrl, projectName, shareUrl}) => (
  <div className="wrapper">
    <Thumb
      previewImgUrl={previewImgUrl}
      projectName={projectName}
      shareUrl={shareUrl}
      maximized />
  </div>
)

export default Max
