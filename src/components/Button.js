const Button = ({ onClick, caseObj, ending, textButton }) => {
  const handleClick = () => {
    onClick(caseObj, ending);
  }

  return (
    <button 
      type="button" 
      className="buttons-container__button" 
      onClick={handleClick}
    >
      {textButton}
    </button>
  );
}

export default Button;
