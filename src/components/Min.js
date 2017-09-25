import React from 'react'
import Thumb from './Thumb'
import './min.css'

const Min = ({previewImgUrl, projectName, shareUrl}) => (
  <div className="wrapper">
    <Thumb
      previewImgUrl={previewImgUrl}
      projectName={projectName}
      shareUrl={shareUrl} />
    <div className="info">
      <h4 className="info--project-name">{ projectName }</h4>
      <span className="info--project-type">InVision Prototype</span>
    </div>
  </div>
)

export default Min
