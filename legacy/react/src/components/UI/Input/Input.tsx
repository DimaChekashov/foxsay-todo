import React from 'react';

import './Input.sass';

interface Props {
  value?: string;
  placeholder?: string;
  type: "text" | "number" | "password";
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => (
  <input className="input" {...props} />
);

export default Input;