import React from "react";

function Main({
  username,
  onSignOut,
  onCardClick,
  users
}) {

  const [inputWord, setInputWord] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [isButtonPut, setIsButtonPut] = React.useState(false);
  const [changedWord, setChangedWord] = React.useState("");

  

  let changedInputValue;


  function handleInputChange(evt) {
    //Проверить регулярное выражение!//
    const inputValue = evt.target.value;
    const regExp = /[а-яё]/ig;
    const checkInputValue = regExp.test(inputValue);

    setIsError(false);
    setIsButtonPut(false);

    if (checkInputValue) {
      setInputWord(inputValue);
    } else {
      setIsError(true);
    }
  }

  function handleResetClick() {
    setInputWord("");
    setIsError(false);
    setIsButtonPut(false);
  }

  function handleGenCaseClick() {
    setIsButtonPut(true);

    

    if (inputWord.endsWith("а")) {
      changedInputValue = inputWord.slice(0, -1) + "ы";
    } else if (inputWord.endsWith("ро") || 
               inputWord.endsWith("то") || 
               inputWord.endsWith("оэ") || 
               inputWord.endsWith("ни") || 
               inputWord.endsWith("си") || 
               inputWord.endsWith("ье") || 
               inputWord.endsWith("ру") ||
               inputWord.endsWith("рэ")) {
                changedInputValue = inputWord;
    } else if (inputWord.endsWith("ок")) {
        changedInputValue = inputWord.slice(0, -2) + "ка";
    } else if (inputWord.endsWith("мя")) {
        changedInputValue = inputWord.slice(0, -1) + "ени";
    } else if (inputWord.endsWith("ая")) {
      changedInputValue = inputWord.slice(0, -2) + "ой";
    } else if (inputWord.endsWith("ий")) {
        changedInputValue = inputWord.slice(0, -2) + "его";
    } else if (inputWord.endsWith("ое") || inputWord.endsWith("ой")) {
        changedInputValue = inputWord.slice(0, -2) + "ого";
    } else if (inputWord.includes("дитя")) {
        changedInputValue = inputWord + "ти"; 
    } else if (inputWord.endsWith("я") || inputWord.endsWith("ия") || inputWord.endsWith("ь")) {
        changedInputValue = inputWord.slice(0, -1) + "и";
    } else if (inputWord.endsWith("вей")) {
        changedInputValue = inputWord.slice(0, -2) + "ья";
    } else if (inputWord.endsWith("й") || inputWord.endsWith("е")) {
        changedInputValue = inputWord.slice(0, -1) + "я";
    } else if (inputWord.endsWith("о") || inputWord.endsWith("ще")) {
        changedInputValue = inputWord.slice(0, -1) + "а";
    } else {
        changedInputValue = inputWord + "а";
    } 

    setChangedWord(changedInputValue);
  }


  function handleDatCaseClick() {
    setIsButtonPut(true);

    if (inputWord.endsWith("а")) {
      changedInputValue = inputWord.slice(0, -1) + "е";
    } else if (inputWord.endsWith("ро") || 
               inputWord.endsWith("то") || 
               inputWord.endsWith("оэ") || 
               inputWord.endsWith("ни") || 
               inputWord.endsWith("си") || 
               inputWord.endsWith("ье") || 
               inputWord.endsWith("ру") ||
               inputWord.endsWith("рэ")) {
                 changedInputValue = inputWord;
    } else if (inputWord.endsWith("ок")) {
        changedInputValue = inputWord.slice(0, -2) + "ку";
    } else if (inputWord.endsWith("ая")) {
      changedInputValue = inputWord.slice(0, -2) + "ой";
    } else if (inputWord.endsWith("мя")) {
        changedInputValue = inputWord.slice(0, -1) + "ени";
    } else if (inputWord.endsWith("ий")) {
        changedInputValue = inputWord.slice(0, -2) + "ему";
    } else if (inputWord.endsWith("ое") || inputWord.endsWith("ой")) {
        changedInputValue = inputWord.slice(0, -2) + "ому";
    } else if (inputWord.includes("дитя")) {
        changedInputValue = inputWord + "ти"; 
    } else if (inputWord.endsWith("ия") || inputWord.endsWith("ь")) {
        changedInputValue = inputWord.slice(0, -1) + "и";
    } else if (inputWord.endsWith("я") || inputWord.endsWith("ь")) {
        changedInputValue = inputWord.slice(0, -1) + "е";
    } else if (inputWord.endsWith("вей")) {
        changedInputValue = inputWord.slice(0, -2) + "ью";
    } else if (inputWord.endsWith("й") || inputWord.endsWith("е")) {
        changedInputValue = inputWord.slice(0, -1) + "ю";
    } else {
      changedInputValue = inputWord + "у";
    }

    setChangedWord(changedInputValue);
  
  }

  function handleAccuCaseClick() {
    setIsButtonPut(true);

    if (inputWord.endsWith("а")) {
      changedInputValue = inputWord.slice(0, -1) + "у";
    } else if (inputWord.endsWith("ро") || 
               inputWord.endsWith("то") || 
               inputWord.endsWith("оэ") || 
               inputWord.endsWith("ни") || 
               inputWord.endsWith("си") || 
               inputWord.endsWith("ье") || 
               inputWord.endsWith("ру") ||
               inputWord.endsWith("рэ")) {
        changedInputValue = inputWord;
    } else if (inputWord.endsWith("ой")) {
        changedInputValue = inputWord.slice(0, -1) + "го";
    } else if (inputWord.endsWith("ая")) {
      changedInputValue = inputWord.slice(0, -2) + "ую";
    } else if (inputWord.endsWith("ий")) {
        changedInputValue = inputWord.slice(0, -2) + "его";
    } else if (inputWord.endsWith("я") || inputWord.endsWith("ия")) {
        changedInputValue = inputWord.slice(0, -1) + "ю";
    } else if (inputWord.endsWith("вей")) {
        changedInputValue = inputWord.slice(0, -2) + "ья";
    } else if (inputWord.endsWith("й")) {
        changedInputValue = inputWord.slice(0, -1) + "я";
    } else {
      changedInputValue = inputWord;
    }

    setChangedWord(changedInputValue);
  }



  function handleCreateCaseClick() {
    setIsButtonPut(true);

    

    if (inputWord.endsWith("а")) {
      changedInputValue = inputWord.slice(0, -1) + "ой";
    } else if (inputWord.endsWith("ое") || inputWord.endsWith("вой")) {
      changedInputValue = inputWord.slice(0, -2) + "ым";
    } else if (inputWord.includes("король") || inputWord.includes("тюль") || inputWord.includes("соболь") || inputWord.endsWith("ие") || inputWord.endsWith("й") || inputWord.endsWith("бль")) {
      changedInputValue = inputWord.slice(0, -1) + "ем";
    } else if (inputWord.endsWith("ро") || 
               inputWord.endsWith("то") || 
               inputWord.endsWith("оэ") || 
               inputWord.endsWith("ни") || 
               inputWord.endsWith("си") || 
               inputWord.endsWith("ье") || 
               inputWord.endsWith("ру") ||
               inputWord.endsWith("е")  ||
               inputWord.endsWith("рэ")) {
                changedInputValue = inputWord;
    } else if (inputWord.endsWith("ок")) {
        changedInputValue = inputWord.slice(0, -2) + "ком";
    } else if (inputWord.endsWith("мя")) {
        changedInputValue = inputWord.slice(0, -1) + "енем";
    } else if (inputWord.endsWith("ший") || inputWord.endsWith("щий") || inputWord.endsWith("чий")) {
        changedInputValue = inputWord.slice(0, -2) + "им";
    } else if (inputWord.endsWith("вей")) {
        changedInputValue = inputWord.slice(0, -2) + "ьем";
    } else if (inputWord.includes("дитя")) {
        changedInputValue = inputWord + "тей"; 
    } else if (inputWord.endsWith("я") || inputWord.endsWith("ия")) {
        changedInputValue = inputWord.slice(0, -1) + "ей";
    } else if (inputWord.endsWith("ь")) {
        changedInputValue = inputWord + "ю";
    } else if (inputWord.endsWith("о") || inputWord.endsWith("ще")) {
        changedInputValue = inputWord + "м";
    } else {
        changedInputValue = inputWord + "ом";
    } 

    setChangedWord(changedInputValue);
  }



  function handlePreposCaseClick() {
    setIsButtonPut(true);

    

    if (inputWord.endsWith("ое") || inputWord.endsWith("вой")) {
      changedInputValue = inputWord.slice(0, -2) + "ом";
    } else if (inputWord.endsWith("вей")) {
        changedInputValue = inputWord.slice(0, -2) + "ье";
    } else if (inputWord.includes("дитя")) {
        changedInputValue = inputWord + "ти"; 
    } else if (inputWord.endsWith("ший") || inputWord.endsWith("щий") || inputWord.endsWith("чий")) {
        changedInputValue = inputWord.slice(0, -2) + "ем";
    } else if (inputWord.endsWith("ие") || inputWord.endsWith("ия")) {
        changedInputValue = inputWord.slice(0, -1) + "и";
    } else if (inputWord.endsWith("мя")) {
        changedInputValue = inputWord.slice(0, -1) + "ени";
    } else if (inputWord.includes("король") || inputWord.includes("тюль") || inputWord.includes("соболь") || inputWord.endsWith("й") || inputWord.endsWith("бль") || inputWord.endsWith("а") || inputWord.endsWith("я") || inputWord.endsWith("о")) {
        changedInputValue = inputWord.slice(0, -1) + "е";
    } else if (inputWord.endsWith("ро") || 
               inputWord.endsWith("то") || 
               inputWord.endsWith("оэ") || 
               inputWord.endsWith("ни") || 
               inputWord.endsWith("си") || 
               inputWord.endsWith("ье") || 
               inputWord.endsWith("ру") ||
               inputWord.endsWith("е")  ||
               inputWord.endsWith("рэ")) {
                changedInputValue = inputWord;
    } else if (inputWord.endsWith("ь")) {
        changedInputValue = inputWord.slice(0, -1) + "и";
    } else if (inputWord.endsWith("ок")) {
        changedInputValue = inputWord.slice(0, -2) + "ке";
    } else {
        changedInputValue = inputWord + "е";
    } 

    setChangedWord(changedInputValue);
  }

  return (
      <section className="main">


        <form className="data-form">
          <p className="data-form__title">
            Введите существительное в именительном падеже и единственном числе
          </p>
          <input 
            required
            type="text"
            name="initial-word" 
            minLength="2" 
            maxLength="50" 
            placeholder="Например: разработчик" 
            className={isError ? "data-form__input data-form__input_error-state" : "data-form__input"}
            value={inputWord}
            onChange={handleInputChange}
          />
          <span 
            id="initial-word-error" 
            className={isError ? "data-form__input-error data-form__input-error_active" : "data-form__input-error"}>
              ОШИБКА! Переключите раскладку на русский язык и не используйте цифры и символы!
          </span>
          <button 
            type="reset" 
            className="data-form__button" 
            onClick={handleResetClick}
          >
            Сбросить
          </button>
        </form>
      

        <div className="buttons-container">
          <button type="button" className="buttons-container__button" onClick={handleGenCaseClick}>Родительный падеж</button>
          <button type="button" className="buttons-container__button" onClick={handleDatCaseClick}>Дательный падеж</button>
          <button type="button" className="buttons-container__button" onClick={handleAccuCaseClick}>Винительный падеж</button>
          <button type="button" className="buttons-container__button" onClick={handleCreateCaseClick}>Творительный падеж</button>
          <button type="button" className="buttons-container__button" onClick={handlePreposCaseClick}>Предложный падеж</button>
        </div>
        <div className="text-container">
          <p className="text-container__result">{isButtonPut ? changedWord : ""}</p>
        </div>
      </section>
  );
}

export default Main;
