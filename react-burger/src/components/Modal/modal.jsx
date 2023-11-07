import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal (props) {

  const closeModalOverlayHandler = (event) => {
    if (!(event.target === props.ref)) {
      props.onClose();
    }
  }

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === 'Escape') {
        props.onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
     <ModalOverlay onClose={ closeModalOverlayHandler }/>
     { props.children }
      <div className={ styles.modal }>
        <div className={ styles.header + " mt-10"}>
          <h2 className="text text_type_main-large ml-10"> { props.header } </h2>
          <button className={ styles.button } onClick={ props.onClose } >
            <CloseIcon type="primary" />
          </button>
        </div>
      </div>
    </>,
    document.getElementById('modals')
  );
};

export default Modal;