import styles from './burgerConstructor.module.css';
import { useState, useRef } from 'react';
import '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement, DragIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import img1 from '../../images/burgerConstructor1.svg';
import img2 from '../../images/burgerConstructor2.svg';
import img3 from '../../images/burgerConstructor3.svg';
import img4 from '../../images/burgerConstructor4.svg';
import img5 from '../../images/burgerConstructor5.svg';
import icon from '../../images/icon.svg';
import Modal from '../Modal/modal';
import OrderDetails from '../OrderDetails/OrderDetails';

function BurgerConstructor () {
  const [showModal, setShowModal] = useState(false);

   const showModalHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const modalRef = useRef();

  const componentsData = [
    {
      text: "Соус традиционный галактический",
      price: 30,
      thumbnail: img2
    },
    {
      text: "Мясо бессмертных моллюсков Protostomia",
      price: 300,
      thumbnail: img3
    },
    {
      text: "Плоды Фалленианского дерева",
      price: 80,
      thumbnail: img4
    },
    {
      text: "Хрустящие минеральные кольца",
      price: 80,
      thumbnail: img5
    },
    {
      text: "Хрустящие минеральные кольца",
      price: 80,
      thumbnail: img5
    },
  ];

  const renderedComponents = componentsData.map((component, index) => (
    <div className={ styles.card } key={index}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={component.text}
        price={component.price}
        thumbnail={component.thumbnail}
      />
    </div>
  ));

  return (
    <div className={ styles.burgerConstructor + " mt-25"}>
      <div className={ styles.burgerIngredients }>
        <div className={ styles.cards + " pl-4 pr-4 "}>
          <div className={ styles.card_top + " pl-6 " }>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх) "
              price={50}
              thumbnail={img1}
            />
          </div>
          { renderedComponents }
          <div className={ styles.card_top + " pl-6 " }>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
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
          <OrderDetails />
        </Modal>}
        </div>
    </div>
  );
};
export default BurgerConstructor;