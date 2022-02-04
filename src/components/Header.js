import logo from "../images/header-logo.png";

function Header(props) {
  return (
    <header className="header">
      <img 
        src={logo} 
        alt="App-logo" 
        className="header__logo" 
      />
      <p className="header__title">
        {props.title}
      </p>
      <a href="https://russkiiyazyk.ru/chasti-rechi/sushhestvitelnoe/tipyi-skloneniya-imen-sushhestvitelnyih.html" 
         lang="en" 
         className="header__link">
           {props.textLink}
      </a>
    </header>
  );
}

export default Header;
