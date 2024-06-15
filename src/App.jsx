import "./App.css";
import clockGif from "./assets/json/clock.gif";
import logo from "./assets/svgs/logo.svg";
import { BrowserRouter, Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import {ReactTyped} from "react-typed";

function App() {
  return (
    <section className="manatrix">
      <div className="coming-soon">
        <img src={logo} alt="MANATRIX LOGO" className="logo" />
        <h1>
          COMING SO<img src={clockGif} alt="" />N
        </h1>

         <ReactTyped className="slogan" strings={["your path to financial mastery starts here"]} typeSpeed={50} showCursor={false}/>

        <div className="contact">
          <a href="https://www.instagram.com/manatrix.ceo/" target="_blank">
            <GrInstagram className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;
