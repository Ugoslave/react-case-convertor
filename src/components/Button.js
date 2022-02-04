function Button(props) {
  return (
    <button 
      type="button" 
      className="buttons-container__button" 
      onClick={props.onClick}
    >
      {props.textButton}
    </button>
  );
}

export default Button;
