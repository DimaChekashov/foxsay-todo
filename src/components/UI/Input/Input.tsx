import React from 'react';

import './Input.sass';

interface Props {
    type: "text" | "number" | "password",
    placeholder?: string
}

function Input(props: Props) {
  return (
    <input className="input" {...props} />
  )
}

export default Input;