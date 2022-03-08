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



const genCaseObj = {
  'ка': {
    value: -1,
    change: 'и',
  },
  'а': {
    value: -1,
    change: 'ы',
  },
  'ро': {
    value: 0,
  },
  'то': {
    value: 0,
  },
  'оэ': {
    value: 0,
  },
  'ни': {
    value: 0,
  },
  'си': {
    value: 0,
  },
  'ье': {
    value: 0,
  },
  'ру': {
    value: 0,
  },
  'рэ': {
    value: 0,
  },
  'ок': {
    value: -2,
    change: 'ка',
  },
  'мя': {
    value: -1,
    change: 'ени',
  },
  'ая': {
    value: -2,
    change: 'ой',
  },
  'ий': {
    value: -2,
    change: 'его',
  },
  'ое': {
    value: -2,
    change: 'ого',
  },
  'ой': {
    value: -2,
    change: 'ого',
  },
  'дитя': {
    value: -1,
    change: 'яти',
  },
  'я': {
    value: -1,
    change: 'и',
  },
  'ия': {
    value: -1,
    change: 'и',
  },
  'ь': {
    value: -1,
    change: 'и',
  },
  'вей': {
    value: -2,
    change: 'ья',
  },
  'о': {
    value: -1,
    change: 'ы',
  },
  'ще': {
    value: -1,
    change: 'а',
  },
  'й': {
    value: -1,
    change: 'я',
  },
  'е': {
    value: -1,
    change: 'я',
  },
}


const datCaseObj = {
  'ро': {
    value: 0,
  },
  'то': {
    value: 0,
  },
  'оэ': {
    value: 0,
  },
  'ни': {
    value: 0,
  },
  'си': {
    value: 0,
  },
  'ье': {
    value: 0,
  },
  'ру': {
    value: 0,
  },
  'рэ': {
    value: 0,
  },
  'а': {
    value: -1,
    change: 'е',
  },
  'ок': {
    value: -2,
    change: 'ку',
  },
  'ая': {
    value: -2,
    change: 'ой',
  },
  'мя': {
    value: -1,
    change: 'ени',
  },
  'ий': {
    value: -2,
    change: 'ему',
  },
  'ое': {
    value: -2,
    change: 'ому',
  },
  'ой': {
    value: -2,
    change: 'ому',
  },
  'дитя': {
    value: -1,
    change: 'яти',
  },
  'ия': {
    value: -1,
    change: 'и',
  },
  'я': {
    value: -1,
    change: 'е',
  },
  'ь': {
    value: -1,
    change: 'и',
  },
  'вей': {
    value: -2,
    change: 'ью',
  },
  'о': {
    value: -1,
    change: 'у',
  },
  'ще': {
    value: -1,
    change: 'у',
  },
  'й': {
    value: -1,
    change: 'ю',
  },
  'е': {
    value: -1,
    change: 'ю',
  },
}

const accuCaseObj = {
  'ро': {
    value: 0,
  },
  'то': {
    value: 0,
  },
  'оэ': {
    value: 0,
  },
  'ни': {
    value: 0,
  },
  'си': {
    value: 0,
  },
  'ье': {
    value: 0,
  },
  'ру': {
    value: 0,
  },
  'рэ': {
    value: 0,
  },
  'а': {
    value: -1,
    change: 'у',
  },
  'ой': {
    value: -1,
    change: 'го',
  },
  'ая': {
    value: -2,
    change: 'ую',
  },
  'ий': {
    value: -2,
    change: 'его',
  },
  'ия': {
    value: -1,
    change: 'ю',
  },
  'я': {
    value: -1,
    change: 'ю',
  },
  'вей': {
    value: -2,
    change: 'ья',
  },
  'й': {
    value: -1,
    change: 'я',
  },
}

const createCaseObj = {
  'ро': {
    value: 0,
  },
  'то': {
    value: 0,
  },
  'оэ': {
    value: 0,
  },
  'ни': {
    value: 0,
  },
  'си': {
    value: 0,
  },
  'ье': {
    value: 0,
  },
  'ру': {
    value: 0,
  },
  'рэ': {
    value: 0,
  },
  'а': {
    value: -1,
    change: 'ой',
  },
  'ое': {
    value: -1,
    change: 'я',
  },
  'вой': {
    value: -2,
    change: 'ым',
  },
  'король': {
    value: -1,
    change: 'ем',
  },
  'тюль': {
    value: -1,
    change: 'ем',
  },
  'соболь': {
    value: -1,
    change: 'ем',
  },
  'ие': {
    value: -1,
    change: 'ем',
  },
  'бль': {
    value: -1,
    change: 'ем',
  },
  'ще': {
    value: -1,
    change: 'ем',
  },
  'е': {
    value: 0,
  },
  'ок': {
    value: -2,
    change: 'ком',
  },
  'мя': {
    value: -1,
    change: 'енем',
  },
  'ший': {
    value: -2,
    change: 'им',
  },
  'щий': {
    value: -2,
    change: 'им',
  },
  'чий': {
    value: -2,
    change: 'им',
  },
  'вей': {
    value: -2,
    change: 'ьем',
  },
  'й': {
    value: -1,
    change: 'ем',
  },
  'дитя': {
    value: -1,
    change: 'ятей',
  },
  'ия': {
    value: -1,
    change: 'ей',
  },
  'я': {
    value: -1,
    change: 'ей',
  },
  'ь': {
    value: -1,
    change: 'ью',
  },
  'о': {
    value: -1,
    change: 'ом',
  },
}

const preposCaseObj = {
  'ро': {
    value: 0,
  },
  'то': {
    value: 0,
  },
  'оэ': {
    value: 0,
  },
  'ни': {
    value: 0,
  },
  'си': {
    value: 0,
  },
  'ье': {
    value: 0,
  },
  'ру': {
    value: 0,
  },
  'рэ': {
    value: 0,
  },
  'ое': {
    value: -2,
    change: 'ом',
  },
  'вой': {
    value: -2,
    change: 'ом',
  },
  'вей': {
    value: -2,
    change: 'ье',
  },
  'дитя': {
    value: -1,
    change: 'яти',
  },
  'ший': {
    value: -2,
    change: 'ем',
  },
  'щий': {
    value: -2,
    change: 'ем',
  },
  'чий': {
    value: -2,
    change: 'ем',
  },
  'ие': {
    value: -1,
    change: 'и',
  },
  'ия': {
    value: -1,
    change: 'и',
  },
  'мя': {
    value: -1,
    change: 'ени',
  },
  'король': {
    value: -1,
    change: 'е',
  },
  'тюль': {
    value: -1,
    change: 'е',
  },
  'соболь': {
    value: -1,
    change: 'е',
  },
  'бль': {
    value: -1,
    change: 'е',
  },
  'й': {
    value: -1,
    change: 'е',
  },
  'а': {
    value: -1,
    change: 'е',
  },
  'я': {
    value: -1,
    change: 'е',
  },
  'о': {
    value: -1,
    change: 'е',
  },
  'е': {
    value: 0,
  },
  'ь': {
    value: -1,
    change: 'и',
  },
  'ок': {
    value: -2,
    change: 'ке',
  },
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
