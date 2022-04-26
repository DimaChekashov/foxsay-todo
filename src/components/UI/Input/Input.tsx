import React from 'react';

import './Input.sass';

interface Props {
    type: "text" | "number" | "password",
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: Props) {
  return (
    <input className="input" {...props} />
  )
}

export default Input;