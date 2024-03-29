import React from "react";

const Header = () => {
    return (
      <div>
    <header>
          <nav className = "nav">
          <img src="./react img.jpg" className ="nav-logo" width="100px" alt ="react logo"/>
        <ol className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
        </nav>
        </header>
        </div>
    )
  }

  export default Header 