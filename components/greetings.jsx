import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')

  const updateName = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="page">
      <h1>To whom am I speaking?</h1>
      <input type="text" name="greeting-input" onChange={updateName} />
      <div className="greeting-container">{name ? `It's nice to meet you ${name}` : null}</div>
    </div>
  )
}
