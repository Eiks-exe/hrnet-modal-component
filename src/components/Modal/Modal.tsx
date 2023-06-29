import React from 'react';
import './Modal.css';

interface Props {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void
}
interface PropsModal extends Props {
  /** Change the modal State */
  isOpen?: boolean;
  /** Define the modal header title text */
  content?: string;
  /** CSS className of modal container */
  className?: string;
  /** CSS classNames of modal elements */
  style?: {
    crossClassName?: string
    buttonClassName?: string
  }
}



const Modal: React.FC<PropsModal> = ({ isOpen, content, onClick, className, style }) => {

  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.onclick = function (event) {
      if (modalRef && modalRef?.current && event.target == modalRef?.current) {
        onClick && onClick();
      }
    };

    return () => {
      window.onclick = null;
    };
  }, []);

  return (
    <div className={'modal-body' + ` ${className || ''}`}
      ref={modalRef}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className="modal-container">
        <div className="close-container">
          <button className={"closeBtn" + ` ${style?.crossClassName || ''}`} onClick={onClick}>x</button>
        </div>
        <div className="modal-content">
          {content}
        </div>
        <button className={"returnBtn" + ` ${style?.buttonClassName || ''}`} onClick={onClick}>go back</button>
      </div>
    </div>
  )
}

export default Modal