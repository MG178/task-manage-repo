import React from "react";

const MainContent = () => {
    return (
      <main>
      <div>
        <h1 className="main--title">Tasks To Complete</h1>
        <ol className="main--list">
            <li>Task 1 goes here</li>
            <li>Task 2 goes here</li>
            <li>Task 3 goes here</li>
        </ol>
        <svg>
          <circle cx="55" cy="75" r="20" stroke="green" strokeWidth="2" />
        </svg>
        <form>
          <input type="text" />
        </form>
      </div>
      </main>
    )
}

export default MainContent