function ModalOverlay (props) {
  return (
   <div onClick={ props.onClose }
     style={{
       position: 'fixed',
       top: 0,
       left: 0,
       width: '100%',
       height: '100%',
       background: 'rgba(0, 0, 0, 0.6)',
       zIndex: 2,
     }}> {props.children} </div>
  );
};

export default ModalOverlay;