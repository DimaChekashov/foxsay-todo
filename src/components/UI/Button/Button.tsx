import React from 'react';

import './Button.sass';

interface Props {
    children: React.ReactNode,
    disabled?: boolean,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({ children, ...props }: Props) {
  return (
    <button {...props} className="button">
        {children}
    </button>
  )
}

export default Button;