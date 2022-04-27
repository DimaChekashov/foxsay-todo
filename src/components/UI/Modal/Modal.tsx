import React from "react";

import "./Modal.sass";

interface Props {
    children: React.ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ children, visible, setVisible }) => {
    return (
    <div className={`modal${visible ? " active" : ""}`} onClick={() => setVisible(false)}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default Modal;