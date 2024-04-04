import React from "react";

const Header = () => {
    return (
      <div>
    <header>
          <nav className = "nav">
          <img src="./react-black.jpeg" className ="nav-logo" alt ="react logo"/>
          <h1 className ="nav--title">Level Up List</h1>
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