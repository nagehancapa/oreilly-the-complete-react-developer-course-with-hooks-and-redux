"use strict";

var details = false;

var showDetails = function showDetails() {
  details = !details;
  render();
};

var appRoot = document.getElementById("app");

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: showDetails },
      !details ? "Show details" : "Hide details"
    ),
    details && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey. These are some details you can now see!"
      )
    )
  );
  ReactDOM.render(jsx, appRoot);
};

render();
