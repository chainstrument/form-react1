'use client'

import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState('')

    const handleChange = (e) => {
         setName(e.target.value)
    }

  return (
    <div>
        bonjour:
        <input type="text" className='' onChange={handleChange} value={name} />
        {name}
    </div>
  )
}

export default Form