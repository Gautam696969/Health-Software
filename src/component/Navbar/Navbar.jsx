import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";


export const Navbar = () => {
  const [showMenu, setshowmenu] = useState( false );
  const handeButtonToggle = () => {
    setshowmenu( !showMenu )
  }
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo flex justify-center gap-4 item-center text-3xl">
            <h1 className="healthhead text-blue-300">Healthcare
              
            </h1>
            <div className="">
                <video autoPlay loop muted className="smallgif text-blue-300" >
                  <source src="/video/healthvid.mp4" type="video/mp4" />
                </video>
              </div>
          </div>

          <nav className={showMenu ? "menu-moblie" : "menu-web"}>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">End</a></li>
            </ul>
          </nav>
          <div className="hambar"><button onclick={handeButtonToggle}><GiHamburgerMenu /></button></div>
        </div>
      </div>
    </header>

  );
};

<img src="" alt="" />
export default Navbar;
