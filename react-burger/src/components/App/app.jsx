import { useState, useEffect } from 'react';
import Header from '../AppHeader/appHeader';
import Main from '../AppMain/appMain';

function App () {

  const API_URL = 'https://norma.nomoreparties.space/api/ingredients';
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при выполнении запроса к API');
        }
        return response.json();
      })
      .then(data => {
        setIngredients(data.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      <Header />
      <Main ingredients={ ingredients } />
    </>
  );
}
export default App;