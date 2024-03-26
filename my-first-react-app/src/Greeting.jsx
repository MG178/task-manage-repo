import React from 'react';

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

const MainContent = () => {
  return (
    <div>
      <h1>Your Level Up List</h1>
      <svg>
        <circle cx="55" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  )
  
}
  const Footer = () => {
    return (
      <footer>
      <small>2024 GSB development. All rights reserved.</small>
      </footer>
    )
  }

const Page = () => {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
      
    </div>
  );
};

export default Page;
