import React from "react";
import DataForm from "./DataForm";
import Button from "./Button";

function Main() {
  const [inputWord, setInputWord] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [changedWord, setChangedWord] = React.useState("");
  let changedInputValue;

  function handleInputChange(evt) {
    const inputValue = evt.target.value;
    const regExp = /[а-яё]/ig;
    const checkInputValue = regExp.test(inputValue);
    
    setIsError(false);
    setChangedWord("");
    
    if (checkInputValue) {
      setInputWord(inputValue);
    } else {
      setIsError(true);
    }
  }

  function handleResetClick() {
    setInputWord("");
    setIsError(false);
    setChangedWord("");
  }

  function handleGenCaseClick() {
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
    } else if (inputWord.endsWith("я") || 
               inputWord.endsWith("ия") || 
               inputWord.endsWith("ь")) {
                 changedInputValue = inputWord.slice(0, -1) + "и";
    } else if (inputWord.endsWith("вей")) {
        changedInputValue = inputWord.slice(0, -2) + "ья";
    } else if (inputWord.endsWith("о") || inputWord.endsWith("ще")) {
        changedInputValue = inputWord.slice(0, -1) + "а";
    } else if (inputWord.endsWith("й") || inputWord.endsWith("е")) {
        changedInputValue = inputWord.slice(0, -1) + "я";
    } else {
        changedInputValue = inputWord + "а";
    } 

    setChangedWord(changedInputValue);
  }

  function handleDatCaseClick() {
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
    } else if (inputWord.endsWith("о") || inputWord.endsWith("ще")) {
      changedInputValue = inputWord.slice(0, -1) + "у"; 
    } else if (inputWord.endsWith("й") || inputWord.endsWith("е")) {
        changedInputValue = inputWord.slice(0, -1) + "ю";
    } else {
      changedInputValue = inputWord + "у";
    }

    setChangedWord(changedInputValue);
  }

  function handleAccuCaseClick() {
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
    if (inputWord.endsWith("а")) {
      changedInputValue = inputWord.slice(0, -1) + "ой";
    } else if (inputWord.endsWith("ое") || inputWord.endsWith("вой")) {
      changedInputValue = inputWord.slice(0, -2) + "ым";
    } else if (inputWord.includes("король") || 
               inputWord.includes("тюль") || 
               inputWord.includes("соболь") || 
               inputWord.endsWith("ие") || 
               inputWord.endsWith("й") || 
               inputWord.endsWith("бль")) {
                 changedInputValue = inputWord.slice(0, -1) + "ем";
    } else if (inputWord.endsWith("ще")) {
        changedInputValue = inputWord + "м";
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
    } else if (inputWord.endsWith("ший") || 
               inputWord.endsWith("щий") || 
               inputWord.endsWith("чий")) {
        changedInputValue = inputWord.slice(0, -2) + "им";
    } else if (inputWord.endsWith("вей")) {
        changedInputValue = inputWord.slice(0, -2) + "ьем";
    } else if (inputWord.includes("дитя")) {
        changedInputValue = inputWord + "тей"; 
    } else if (inputWord.endsWith("я") || inputWord.endsWith("ия")) {
        changedInputValue = inputWord.slice(0, -1) + "ей";
    } else if (inputWord.endsWith("ь")) {
        changedInputValue = inputWord + "ю";
    } else if (inputWord.endsWith("о")) {
        changedInputValue = inputWord + "м"; 
    } else {
        changedInputValue = inputWord + "ом";
    } 

    setChangedWord(changedInputValue);
  }

  function handlePreposCaseClick() {
    if (inputWord.endsWith("ое") || inputWord.endsWith("вой")) {
      changedInputValue = inputWord.slice(0, -2) + "ом";
    } else if (inputWord.endsWith("вей")) {
        changedInputValue = inputWord.slice(0, -2) + "ье";
    } else if (inputWord.includes("дитя")) {
        changedInputValue = inputWord + "ти"; 
    } else if (inputWord.endsWith("ший") || 
               inputWord.endsWith("щий") || 
               inputWord.endsWith("чий")) {
                 changedInputValue = inputWord.slice(0, -2) + "ем";
    } else if (inputWord.endsWith("ие") || inputWord.endsWith("ия")) {
        changedInputValue = inputWord.slice(0, -1) + "и";
    } else if (inputWord.endsWith("мя")) {
        changedInputValue = inputWord.slice(0, -1) + "ени";
    } else if (inputWord.includes("король") || 
               inputWord.includes("тюль") || 
               inputWord.includes("соболь") || 
               inputWord.endsWith("й") || 
               inputWord.endsWith("бль") || 
               inputWord.endsWith("а") || 
               inputWord.endsWith("я") || 
               inputWord.endsWith("о")) {
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
      <DataForm 
        title = "Введите существительное в именительном падеже и единственном числе"  
        textButton = "Сбросить" 
        value = {inputWord} 
        onChange = {handleInputChange} 
        isError = {isError} 
        textError = "ОШИБКА! Переключите раскладку на русский язык и не используйте цифры и символы!" 
        onClick = {handleResetClick} 
        name = "initial-word" 
        placeholder = "Например: разработчик" 
      />
    <div className="buttons-container">
      <Button 
        onClick={handleGenCaseClick} 
        textButton="Родительный падеж"
      />
      <Button 
        onClick={handleDatCaseClick} 
        textButton="Дательный падеж"
      />
      <Button 
        onClick={handleAccuCaseClick} 
        textButton="Винительный падеж"
      />
      <Button 
        onClick={handleCreateCaseClick} 
        textButton="Творительный падеж"
      />
      <Button 
        onClick={handlePreposCaseClick} 
        textButton="Предложный падеж"
      />
    </div>
    <div className="text-container">
      <p className="text-container__result">
        {changedWord}
      </p>
    </div>
    </section>
  );
}

export default Main;
