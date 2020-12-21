//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>JSX Practice! What a weird syntax...</h1>
    <ul>
      <li>Created an app from scratch</li>
      <li>Then I added a fancy h1 tag</li>
      <li>And then sprinkled a little unordered list love on top. &#10084;</li>
    </ul>
  </div>,
  document.getElementById("root")
);
