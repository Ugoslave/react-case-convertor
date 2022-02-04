import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
      <div className="page">
        <Header 
          textLink= "Общие правила склонения" 
          title="Case Convertor" 
        />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
