import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";

function App() {

  const [isCardOpen, setIsCardOpen] = React.useState(false);

  

  return (
      <div className="page">
        <Header textButton="Регистрация" nav="sign-up" />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
