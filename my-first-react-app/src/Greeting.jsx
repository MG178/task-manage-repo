import React from 'react';
import Header from "./Header"
import Footer from "./Footer"

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

const App = () => {
  return (
    <div>
      <Header/>
      <MainContent/>
      <Footer/>
      
    </div>
  );
};

export default App;
