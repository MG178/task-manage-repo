import React from 'react';

const Greeting = () => {
  return (
    <div>
      <header>
        <nav>
          <img src="./react img.jpg" width="200px" alt ="react logo"/>

        </nav>
      </header>
      <h1>A list created using react</h1>
      <ol className="test-list">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <svg>
        <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2" />
      </svg>
      <form>
        <input type="text" />
      </form>
    </div>
  );
};

export default Greeting;
