import styles from './IngridientDetails.module.css';
function IngridientDetails ({ ingredient }) {
  return (
    <div className={ styles.main }>
      <img className="mt-4" src={ ingredient.image } alt=" pictureOfIngridient "/>
      <h2 className="text text_type_main-medium">{ ingredient.name }</h2>
      <div className={ styles.description + " mt-8"}>
        <div className = { styles.card }>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_main-default text_color_inactive">244,4</p>
        </div>
        <div className = { styles.card }>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">12,2</p>
        </div>
        <div className = { styles.card }>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">17,2</p>
        </div>
        <div className = { styles.card }>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">10,2</p>
        </div>
      </div>
    </div>
  );
};
export default  IngridientDetails;