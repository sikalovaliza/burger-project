import styles from './OrderDetails.module.css';
import img from '../../images/graphics.svg';
function OrderDetails () {
  return (
    <>
      <div className={ styles.main } >
        <h2 className="text text_type_digits-large mt-30">034536</h2>
        <h2 className="mt-8 text text_type_main-medium">идентификатор заказа</h2>
        <img className="mt-8" src={ img } alt="pictureOfPopup" />
        <h3 className="mt-15 text text_type_main-small"> Ваш заказ начали готовить</h3>
        <p className=" mt-2 text text_type_main-small text_color_inactive">Дождитесь готовности на орбитальной станции</p>
      </div>
    </>
  );
};
export default  OrderDetails;