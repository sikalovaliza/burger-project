import React from 'react';
import ReactDOM from 'react-dom';
import Ingredients from '../BurgerIngredients/burgerIngredients';
import Constructor from '../BurgerConstructor/burgerConstructor';
import styles from './appMain.module.css';
function Main () {
  return (
    <div className={ styles.main }>
      <Ingredients />
      <Constructor />
    </div>
  );
}
export default Main;