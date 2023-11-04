import { useState, useEffect, useRef } from 'react';
import styles from './burgerIngredients.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import image1 from '../../images/itemIngredient1.svg';
import image2 from '../../images/itemIngredient2.svg';
import image3 from '../../images/itemIngredient3.svg';
import image4 from '../../images/itemIngredient4.svg';
import image5 from '../../images/itemIngredient5.svg';
import image6 from '../../images/itemIngredient6.svg';
import Modal from '../Modal/modal';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import IngridientDetails from '../IngridientDetails/IngridientDetails';
function Ingredients () {

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const modalRef = useRef();

  const header = "Детали ингридиента";

  const handleItemClick = (image, name) => {
    setSelectedIngredient({ image, name, header});
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const closeModalOverlayHandler = (event) => {
    if (event.target === modalRef.current) {
      setModalOpen(true);
    } else {
      closeModalHandler();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", closeModalHandler);
    return () => {
      document.removeEventListener("keydown", closeModalHandler);
    };
  }, []);
    
  return (
     <div className={ styles.ingredients }>
       <h2 className={ styles.title + " text text_type_main-large" }>Соберите бургер</h2>
       <div className={ styles.tabs }>
         <button type="button"  className={" text text_type_main-small " + styles.button_active } >Булки</button>
         <button type="button"  className={" text text_type_main-small text_color_inactive " + styles.button}>Соусы</button>
         <button className={" text text_type_main-small text_color_inactive " + styles.button }>Начинки</button>
       </div>
       <div className={ styles.scroll }>
        <h3 className={ styles.title +" text text_type_main-medium mt-10 " }>Булки</h3>
        <div className={ styles.container }>
          <div className={ styles.item } onClick={() => handleItemClick(image1, "Краторная булка N-200i")}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={ image1 } alt=" pictureOfIngridient "/>
            <div className={ " mt-1 " + styles.cost }>
              <p className="text text_type_digits-default" >20</p>
              <CurrencyIcon type="primary" />
            </div>
            <h4 className="text text_type_main-small mt-1">Краторная булка N-200i</h4>
          </div>
          <div className={ styles.item } onClick={() => handleItemClick(image2, "Флюоресцентная булка R2-D3")}>
            <img src={ image2 } alt=" pictureOfIngridient "/>
            <div className={ " mt-1 " + styles.cost }>
              <p className="text text_type_digits-default" >20</p>
              <CurrencyIcon type="primary" />
            </div>
            <h4 className="text text_type_main-small mt-1">Флюоресцентная булка R2-D3</h4>
          </div>
        </div>
        <h3 className={ styles.title +" text text_type_main-medium " }>Соусы</h3>
        <div className={ styles.container }>
          <div className={ styles.item } onClick={() => handleItemClick(image3, "Соус Spicy-X")}>
            <img src={ image3 } alt=" pictureOfIngridient "/>
            <div className={ " mt-1 " + styles.cost }>
              <p className="text text_type_digits-default" >30</p>
              <CurrencyIcon type="primary" />
            </div>
            <h4 className="text text_type_main-small mt-1">Соус Spicy-X</h4>
          </div>
          <div className={ styles.item } onClick={() => handleItemClick(image4, "Соус фирменный Space Sauce")}>
            <img src={ image4 } alt=" pictureOfIngridient "/>
            <div className={ " mt-1 " + styles.cost }>
              <p className="text text_type_digits-default" >30</p>
              <CurrencyIcon type="primary" />
            </div>
            <h4 className="text text_type_main-small mt-1">Соус фирменный Space Sauce</h4>
          </div>
          <div className={ styles.item } onClick={() => handleItemClick(image5, "Соус традиционный галактический")}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={ image5 } alt=" pictureOfIngridient "/>
            <div className={ " mt-1 " + styles.cost }>
              <p className="text text_type_digits-default" >30</p>
              <CurrencyIcon type="primary" />
            </div>
            <h4 className="text text_type_main-small mt-1">Соус традиционный галактический</h4>
          </div>
          <div className={ styles.item } onClick={() => handleItemClick(image6, "Соус с шипами Антарианского плоскоходца")}>
            <img src={ image6 } alt=" pictureOfIngridient "/>
            <div className={ " mt-1 " + styles.cost }>
              <p className="text text_type_digits-default" >30</p>
              <CurrencyIcon type="primary" />
            </div>
            <h4 className="text text_type_main-small mt-1">Соус с шипами Антарианского плоскоходца</h4>
          </div>
          {isModalOpen &&
          <Modal ref={ modalRef } onClose={ closeModalHandler }>
          <ModalOverlay onClose={ closeModalOverlayHandler }/>
          <IngridientDetails ingredient={ selectedIngredient } />
          </Modal>}
          </div>
        </div>
      </div>
   );
};
export default Ingredients;