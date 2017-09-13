import React from 'react'
import logo from './InVision-icon.svg'
import './link.css'
import Analytics from '../helpers/Analytics'

const Link = ({shareUrl}) => (
  <a
    className="link"
    href={ shareUrl }
    target="_blank"
    rel="noopener noreferrer"
    onClick={ () => Analytics.track('Confluence.OpenInInVision') }>
    <span className="logo">
      <img src={ logo } width="28" height="28" alt="InVisionApp logo" />
      <span className="open-in-invision">Open in InVision</span>
    </span>
  </a>
)

export default Link
