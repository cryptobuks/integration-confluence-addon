import React from 'react'

const ErrorMessage = ({url}) => (
  <div className="aui-message aui-message-error">
    <p>
      <strong>Error!</strong>
    </p>
    <p>{ decodeURIComponent(url) } is not valid or password protected.</p>
  </div>
)

export default ErrorMessage
