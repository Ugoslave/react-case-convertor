import React from "react";

import DataForm from "./DataForm";
import Button from "./Button";

import genCaseObj from "../constants/GenCaseObject";
import datCaseObj from "../constants/DatCaseObject";
import accuCaseObj from "../constants/AccuCaseObject";
import createCaseObj from "../constants/CreateCaseObject";
import preposCaseObj from "../constants/PreposCaseObject";

const Main = () => {
  const [inputWord, setInputWord] = React.useState("");
  const [isError, setIsError] = React.useState(false);
  const [changedWord, setChangedWord] = React.useState("");

  let changedInputValue; // объявляется переменная для хранения измененного слова

  const handleInputChange = (evt) => {
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

  const handleResetClick = () => {
    setInputWord("");
    setIsError(false);
    setChangedWord("");
  }

  const checkAndReplaceEnd = (end) => {
    const arrKeys = Object.keys(end);

    for (let i of arrKeys) {
      if (inputWord.endsWith(i)) {
        return (inputWord.slice(0, end[i].value) + (end[i].value ? end[i].change : inputWord));
      }
    }
  }

  function handleGenCaseClick() {
    changedInputValue = checkAndReplaceEnd(genCaseObj);
    setChangedWord(changedInputValue ? changedInputValue : inputWord + 'а');
  }

  function handleDatCaseClick() {
    changedInputValue = checkAndReplaceEnd(datCaseObj);
    setChangedWord(changedInputValue ? changedInputValue : inputWord + 'у');
  }

  function handleAccuCaseClick() {
    changedInputValue = checkAndReplaceEnd(accuCaseObj);
    setChangedWord(changedInputValue ? changedInputValue : inputWord);
  }

  function handleCreateCaseClick() {
    changedInputValue = checkAndReplaceEnd(createCaseObj);
    setChangedWord(changedInputValue ? changedInputValue : inputWord + 'ом');
  }

  function handlePreposCaseClick() {
    changedInputValue = checkAndReplaceEnd(preposCaseObj);
    setChangedWord(changedInputValue ? changedInputValue : inputWord + 'е');
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
