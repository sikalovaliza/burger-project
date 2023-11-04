import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import closeButton from '../../images/closeButton.svg';
import IngridientDetails from '../IngridientDetails/IngridientDetails';
function Modal (props) {
  return (
    <>
      { props.children }
      <div className={ styles.modal }>
        <div className={ styles.header + " mt-10"}>
          <h2></h2>
          <button className={ styles.button } onClick={ props.onClose } >
            <img className={ styles.img } src={ closeButton } alt="icon for close" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Modal;