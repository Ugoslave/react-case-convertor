import logo from "../images/header-logo.png";

function Header({ nav, textButton, username, onSignOut }) {
  return (
    <header className="header">
      <img src={logo} alt="App-logo" className="header__logo" />
      <p className="header__title">Case Convertor</p>
      <a href="https://russkiiyazyk.ru/chasti-rechi/sushhestvitelnoe/tipyi-skloneniya-imen-sushhestvitelnyih.html" 
         lang="en" 
         className="header__link">
           Общие правила склонения
      </a>
    </header>
  );
}

export default Header;
