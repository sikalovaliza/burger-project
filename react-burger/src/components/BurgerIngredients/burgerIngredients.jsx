import { useState, useRef } from 'react';
import styles from './burgerIngredients.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../Modal/modal';
import IngridientDetails from '../IngridientDetails/IngridientDetails';
function BurgerIngredients (props) {

  const [isModalOpen, setModalOpen] = useState(false);

  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const modalRef = useRef();

  const header = "Детали ингридиента";

  const handleItemClick = (image, name, proteins, fat, carbohydrates, calories) => {
    setSelectedIngredient({ image, name, proteins, fat, carbohydrates, calories });
    setModalOpen(true);
  };

  const closeModalHandler = () => {
    setModalOpen(false);
  };

  const Component = (component, index) => (
    <div className={ styles.item } key={index} onClick={() => handleItemClick(component.image_large, component.name, component.proteins, component.fat, component.carbohydrates, component.calories)}>
      <Counter count={1} size="default" extraClass="m-1" />
      <img src={ component.image }  alt="Картинка с ингредиентом" />
      <div className={ " mt-1 " + styles.cost }>
        <p className="text text_type_digits-default" >{ component.price }</p>
        <CurrencyIcon type="primary" />
      </div>
      <h4 className="text text_type_main-small mt-1">{ component.name }</h4>
    </div>
  );

  const breadComponents = props.ingredients.map((component, index) => {
    if (component.type === "bun") {
      return (Component(component, index));
    } else {
      return null;
    }
  });

  const sauceComponents = props.ingredients.map((component, index) => {
    if (component.type === "sauce") {
      return (Component(component, index));
    } else {
      return null;
    }
  });

  const mainComponents = props.ingredients.map((component, index) => {
    if (component.type === "main") {
      return (Component(component, index));
    } else {
      return null;
    }
  });
  
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
           { breadComponents }
         </div>
         <h3 className={ styles.title +" text text_type_main-medium mt-10 " }>Соусы</h3>
         <div className={ styles.container }>
           { sauceComponents }
         </div>
         <h3 className={ styles.title +" text text_type_main-medium mt-10 " }>Начинки</h3>
         <div className={ styles.container }>
           { mainComponents }
         </div>
          {isModalOpen &&
          <Modal ref={ modalRef } header={ header } onClose={ closeModalHandler }>
            <IngridientDetails ingredient={ selectedIngredient } />
          </Modal>}
        </div>
      </div>
   );
};
export default BurgerIngredients;