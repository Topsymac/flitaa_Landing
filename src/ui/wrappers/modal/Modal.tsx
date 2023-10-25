import React from 'react';
import './Modal.css';

interface IProps {
  show: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  from?: string;
  width?: string;
}

const Modal = ({ show, onClose, children, from, width }: IProps): JSX.Element => {
  return (
    <div className={`${from != null ? `modal-${from}` : 'modal'} ${show ? 'show' : ''}`} onClick={onClose}>
      <div
        className={`${from != null ? `modal-content-${from}` : 'modal-content'} card-bg`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ width: width != null ? width : '' }}
      >
        <div className='modal-body'>{children}</div>
        <div className='modal-footer'></div>
      </div>
    </div>
  );
};

export default Modal;
