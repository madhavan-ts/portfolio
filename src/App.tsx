// import { RoughNotation } from "react-rough-notation";
import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import { useState } from "react";
function App() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <>
      <div className="app" data-theme={dark ? "dark" : "light"}>
        <div className="container">
          <NavBar dark={dark} OnHandleClick={toggleTheme} />
          <HeroSection />
          {/* <RoughNotation show={true} color="#ff00ff33" type="highlight"> */}
          Hello
          {/* </RoughNotation> */}
        </div>
      </div>
    </>
  );
}

export default App;
