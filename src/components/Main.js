import React from "react";

function Main({
  username,
  onSignOut,
  onCardClick,
  users
}) {

  return (
      <section className="main">


        <form className="data-form">
          <p className="data-form__title">
            Введите существительное в именительном падеже и единственном числе
          </p>
          <input 
            required
            type="url"
            name="initial-word"
            placeholder="Например: разработчик" 
            className="data-form__input"
          />
          <button 
            type="reset" 
            className="data-form__button"
          >
            Сбросить
          </button>
        </form>
      

        <div className="buttons-container">
          <button type="button" className="buttons-container__button">Именительный падеж</button>
          <button type="button" className="buttons-container__button">Родительный падеж</button>
          <button type="button" className="buttons-container__button">Дательный падеж</button>
          <button type="button" className="buttons-container__button">Винительный падеж</button>
          <button type="button" className="buttons-container__button">Творительный падеж</button>
          <button type="button" className="buttons-container__button">Предложный падеж</button>
        </div>
        <div className="text-container">
          <p className="text-container__result">пустынный</p>
        </div>
      </section>
  );
}

export default Main;
