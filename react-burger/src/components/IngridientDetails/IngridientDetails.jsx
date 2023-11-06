import styles from './IngridientDetails.module.css';
import PropTypes from 'prop-types';
function IngridientDetails ({ ingredient }) {
  return (
    <div className={ styles.main }>
      <img className="mt-4" src={ ingredient.image } alt=" pictureOfIngridient "/>
      <h2 className="text text_type_main-medium">{ ingredient.name }</h2>
      <div className={ styles.description + " mt-8"}>
        <div className = { styles.card }>
          <p className="text text_type_main-default text_color_inactive">Калории,ккал</p>
          <p className="text text_type_main-default text_color_inactive">{ ingredient.calories }</p>
        </div>
        <div className = { styles.card }>
          <p className="text text_type_main-default text_color_inactive">Белки, г</p>
          <p className="text text_type_main-default text_color_inactive">{ ingredient.proteins }</p>
        </div>
        <div className = { styles.card }>
          <p className="text text_type_main-default text_color_inactive">Жиры, г</p>
          <p className="text text_type_main-default text_color_inactive">{ ingredient.fat }</p>
        </div>
        <div className = { styles.card }>
          <p className="text text_type_main-default text_color_inactive">Углеводы, г</p>
          <p className="text text_type_main-default text_color_inactive">{ ingredient.carbohydrates }</p>
        </div>
      </div>
    </div>
  );
};

export default  IngridientDetails;