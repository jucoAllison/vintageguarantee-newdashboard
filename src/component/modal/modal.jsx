import React from 'react';

import Classes from './modal.module.css';

const Modal = ({showModal = false, children, color="#496", closeModal, title}) => {
  return (
    <>
      <BackDrop showModal={showModal} />
      <div
        style={{display: showModal === true ? 'block' : 'none'}}
        className={Classes.modalCover}
      >
        <div className={Classes.headerSection}>
          <div style={{color: color}} className={Classes.title}>{title}</div>
          <div onClick={closeModal} className={Classes.closeCover}>
            Close
          </div>
        </div>
        <div style={{width: '100%', height: '100%', left: "0px"}}>{children}</div>
      </div>
    </>
  );
};

const BackDrop = ({showModal}) => {
  return (
    <div
      style={{display: showModal === true ? 'block' : 'none'}}
      className={Classes.backDropCover}
    ></div>
  );
};

export default Modal;
