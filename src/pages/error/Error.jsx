import React from 'react'
import error from "../error/Error.module.css"

const Error = () => {
  return (
    <div className={error.container}>
        <h1>404</h1>
        <p>the requested could not find the page this server</p>
    </div>
  )
}

export default Error
