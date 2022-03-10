const DataForm = ({ title, name, placeholder, isError, value, onChange, textError, onClick, textButton }) => {
  return (
    <form className="data-form">
      <p className="data-form__title">
        {title}
      </p>
      <input 
        required
        type="text"
        name={name} 
        minLength="2" 
        maxLength="50" 
        placeholder={placeholder} 
        className={isError ? "data-form__input data-form__input_error-state" : "data-form__input"}
        value={value}
        onChange={onChange}
      />
      <span 
        id="initial-word-error" 
        className={isError ? "data-form__input-error data-form__input-error_active" : "data-form__input-error"}>
          {textError}
      </span>
      <button 
        type="reset" 
        className="data-form__button" 
        onClick={onClick}
      >
        {textButton}
      </button>
    </form>
  );
}

export default DataForm;
