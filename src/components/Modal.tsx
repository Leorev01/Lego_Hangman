import { createPortal } from "react-dom"
import {forwardRef} from 'react';
import {motion} from 'framer-motion';

type modalProps = {
    children: React.ReactNode;
    exit: () => void;
    next: () => void;
    
}

const Modal = forwardRef(({children, exit, next}:modalProps, ref: React.Ref<HTMLDialogElement>) => {

    const portalRoot = document.getElementById('modal');
    if(!portalRoot) return null;

    const ModalWindow = createPortal(
        <motion.dialog
        initial={{ opacity: 0, y:30 }}
        animate={{ opacity: 1, y:0 }}
        transition={{duration: 0.3}}
        exit={{ opacity: 0, y:30 }}
        ref={ref} className="modal">
            {children}
            <p>Press Enter to continue, or Escape to exit</p>
            <button className="exit-button" onClick={exit}>EXIT</button>
            <button className="continue-button" onClick={next}>CONTINUE</button>
        </motion.dialog>,
        portalRoot
    )

    return ModalWindow;
})

export default Modal;
