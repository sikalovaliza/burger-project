import React from 'react';
import styles from './appHeader.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
function Header () {
  return (
    <header className={ styles.header_space }>
      <div className={ styles.header }>
        <div className={ styles.cards }>
          <div className={ styles.box }>
            <BurgerIcon  type="primary" />
            <button className={ " ml-2 text text_type_main-small " + styles.button } >Конструктор</button>
          </div>
          <div className={ styles.box }>
            <ListIcon type="secondary" />
            <button className={" ml-2 text text_type_main-small text_color_inactive " + styles.button } >Лента заказов</button>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={ styles.box }>
          <ProfileIcon type="secondary" />
          <button className={" ml-2 text text_type_main-small text_color_inactive " + styles.button } >Личный кабинет</button>
        </div>
      </div>
    </header>
  );
};
export default Header;