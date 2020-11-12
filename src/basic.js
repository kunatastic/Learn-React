import React from "react";
import ReactDom from "react-dom";

// JSX Rules
// return single Element
// div/section/article or Fragment
// use camelCase for html attributes
// className instead of class
// close every Element
// formatting

function Greeting() {
  return (
    <main>
      <div>Lists</div>
      <ul>
        <li>One</li>
        <li>Two</li>
      </ul>
    </main>
  );
}

/* Alternative way to write a function a bit tough */
// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello Div!")
//   );
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
