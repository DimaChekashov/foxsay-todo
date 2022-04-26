import React from 'react';

import './Button.sass';

interface Props {
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ children, ...props }) => (
  <button {...props} className="button">
    {children}
  </button>
);

export default Button;