import React from 'react';
import ReactDOM from 'react-dom';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import BurgerConstructor from '../BurgerConstructor/burgerConstructor';
import styles from './appMain.module.css';
function Main (props) {
  return (
    <main className={ styles.main }>
      <BurgerIngredients ingredients = { props.ingredients } />
      <BurgerConstructor />
    </main>
  );
}
export default Main;