import React from 'react';

import './Alert.sass';

interface Props {
    children: React.ReactNode;
    show: boolean;
}

const Alert: React.FC<Props> = ({ children, show }) => {
    return (
        <div className={`alert ${show ? "show" : ""}`}>
            {children}
        </div>
    )
}

export default Alert;