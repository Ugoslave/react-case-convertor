function DataForm(props) {
  return (
    <form className="data-form">
      <p className="data-form__title">
        {props.title}
      </p>
      <input 
        required
        type="text"
        name={props.name} 
        minLength="2" 
        maxLength="50" 
        placeholder={props.placeholder} 
        className={props.isError ? "data-form__input data-form__input_error-state" : "data-form__input"}
        value={props.value}
        onChange={props.onChange}
      />
      <span 
        id="initial-word-error" 
        className={props.isError ? "data-form__input-error data-form__input-error_active" : "data-form__input-error"}>
          {props.textError}
      </span>
      <button 
        type="reset" 
        className="data-form__button" 
        onClick={props.onClick}
      >
        {props.textButton}
      </button>
    </form>
  );
}

export default DataForm;
