import styles from './burgerConstructor.module.css';
import { useState, useEffect, useRef } from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import img1 from '../../images/burgerConstructor1.svg';
import img2 from '../../images/burgerConstructor2.svg';
import img3 from '../../images/burgerConstructor3.svg';
import img4 from '../../images/burgerConstructor4.svg';
import img5 from '../../images/burgerConstructor5.svg';
import icon from '../../images/icon.svg';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import Modal from '../Modal/modal';
import OrderDetails from '../OrderDetails/OrderDetails';

function Constructor () {
  const [showModal, setShowModal] = useState(false);

   const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", closeModalHandler);
    return () => {
      document.removeEventListener("keydown", closeModalHandler);
    };
  }, []);

  const modalRef = useRef();
  
  const closeModalOverlayHandler = (event) => {
    if (event.target === modalRef.current) {
      setShowModal(true);
    } else {
      closeModalHandler();
    }
  }

  return (
    <div className={ styles.burgerConstructor + " mt-25"}>
      <div className={ styles.burgerIngredients }>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className="pl-4 pr-4">
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}} className=" pl-6 ">
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i"
              price={50}
              thumbnail={img1}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Соус традиционный галактический"
              price={30}
              thumbnail={img2}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Мясо бессмертных моллюсков Protostomia"
              price={300}
              thumbnail={img3}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Плоды Фалленианского дерева"
              price={80}
              thumbnail={img4}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={img5}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <DragIcon type="primary" />
            <ConstructorElement
              text="Хрустящие минеральные кольца"
              price={80}
              thumbnail={img5}
            />
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}} className=" pl-6 ">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i"
              price={50}
              thumbnail={img1}
            />
          </div>
        </div>
      </div>
      <div className={ styles.burgerInfo + " mt-10 pr-4" }>
        <div className={ styles.burgerPrice + " mr-10 "}>
          <p className="text text_type_digits-medium" >610</p>
          <img src={ icon } alt="iconOfCost"  />
        </div>
        <Button onClick={ showModalHandler } htmlType="button" type="primary" size="medium">Оформить заказ</Button>
        {showModal && 
        <Modal ref={ modalRef } onClose={ closeModalHandler }>
          <ModalOverlay onClose={ closeModalOverlayHandler }></ModalOverlay>
          <OrderDetails/>
        </Modal>}
        </div>
    </div>
  );
};
export default Constructor;