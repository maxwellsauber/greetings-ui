import React, { useState } from 'react'

export default () => {
  const [name, setName] = useState('')

  return (
    <div className="form">
      <div className="intro">To whom am I speaking?</div>
      <input type="text" name="name" onChange={event => setName(event.target.value)} value={name} />
      <div className="greeting">
        {name ? `It's nice to meet you ${name}` : null}
      </div>
    </div>
  )
}
