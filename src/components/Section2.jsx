function Section2() {
  return (
    <div className="sec2container">
      <div className="sec2">
        <div className="sec2leftitem">
          <div className="sec2logo">
            <img
              src="./src/assets/nikelogo.png"
              className="sec2logoimage"
            ></img>
          </div>
        </div>
        <div className="sec2middleitem">
          <div className="sec2menu">
            <ul className="sec2ul">
              <li className="sec2menuitem">
                <a href="#">New & Featured</a>
              </li>
              <li className="sec2menuitem">
                <a href="#">Men</a>
              </li>
              <li className="sec2menuitem">
                <a href="#">Women</a>
              </li>
              <li className="sec2menuitem">
                <a href="#">Kids</a>
              </li>
              <li className="sec2menuitem">
                <a href="#">Accessories</a>
              </li>
              <li className="sec2menuitem">
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>
          <div className="hamburgermenu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <div className="sec2rightitem">
          <img src="./src/assets/search.png" className="searchicon"></img>
          <input className="searchinput" placeholder="search"></input>
          <img src="./src/assets/favourite.png" className="favicon"></img>
          <img src="./src/assets/cart.png" className="carticon"></img>
        </div>
      </div>
    </div>
  );
}

export default Section2;
