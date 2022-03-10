import logo from "../images/header-logo.png";

const Header = ({ title, textLink }) => {
  return (
    <header className="header">
      <img 
        src={logo} 
        alt="App-logo" 
        className="header__logo" 
      />
      <p className="header__title">
        {title}
      </p>
      <a href="https://russkiiyazyk.ru/chasti-rechi/sushhestvitelnoe/tipyi-skloneniya-imen-sushhestvitelnyih.html" 
         lang="en" 
         className="header__link">
           {textLink}
      </a>
    </header>
  );
}

export default Header;
