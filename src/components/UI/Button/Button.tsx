import React from 'react';

import './Button.sass';

interface Props {
    children: React.ReactNode,
    disabled?: boolean
}

function Button({ children, ...props }: Props) {
  return (
    <button {...props} className="button">
        {children}
    </button>
  )
}

export default Button;