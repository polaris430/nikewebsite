import { useState } from "react";
import Hamburger from "./Hamburger";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div>
      <div className="navigation">
        <div className="navlogo">
          <img src="assets/nikelogo.png" className="sec2logoimage"></img>
        </div>
        <ul className="navitem navitem1">
          <li>news & featured</li>
          <li>men's</li>
          <li>women's</li>
          <li>kids</li>
          <li>accessories</li>
          <li>sale</li>
        </ul>
        <div className="hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen} />
        </div>
        <style jsx>
          {`
            .navigation {
              display: flex;
              justify-content: start;
              width: 100%;
              height: 50px;
              gap: 3em;
              margin-top: 10px;
              margin-bottom: 10px;
              padding-right: 3em;
            }
            .navlogo {
              margin-left: 3em;
            }

            .navigation ul {
              display: fixed;
              flex-wrap: wrap;
              align-items: center;
              overflow: hidden;
              margin-left: 3em;
              margin-top: 10px;
            }
            .navigation ul li {
              list-style-type: none;
              padding-right: 10px;
            }

            .navitem {
              display: flex;
              flex: auto;
              justify-content: end;
              gap: 3em;
            }

            .navitem1 {
              flex: 6 auto;
              text-align: left;
            }

            .navitem2 {
              flex: auto;
            }

            .searchinput {
              text-align: center;
              border-radius: 20px;
              width: 200px;
              background: #eeeeee;
              border: none;
            }

            .searchicon,
            .favicon,
            .carticon {
              width: 50px;
              height: 50px;
            }

            .hamburger {
              display: none;
              z-index: 6;
            }
            @media (max-width: 800px) {
                .navigation {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    height: 50px;
                    gap: 3em;
                    top: 0;
                  }
              .hamburger {
                display: flex;
                padding-top: 10px;
                z-index: 6;
                align-items: start;
              }

              .navigation ul {
                display: ${hamburgerOpen ? "inline" : "none"};
                background-color: #eeeeee;
                height: 100vh;
                width: 100vw;
                margin-top: 50px;
                padding-left: 20px;
                padding-top: 10px;
                position: fixed;
              }

              .favicon,
              .searchinput {
                display: none;
              }

            .carticon, .searchicon{
                padding: 12px;
            }
          `}
        </style>
        <div className="navitem navitem2">
          <img src="assets/search.png" className="searchicon"></img>
          <input className="searchinput" placeholder="search"></input>
          <img src="assets/hearticon.jpg" className="favicon"></img>
          <img src="assets/cart.png" className="carticon"></img>
        </div>
      </div>
    </div>
  );
}
