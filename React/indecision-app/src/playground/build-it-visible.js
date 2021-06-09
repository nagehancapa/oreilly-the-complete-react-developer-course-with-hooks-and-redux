let details = false;

const showDetails = () => {
  details = !details;
  render();
};

const appRoot = document.getElementById("app");

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={showDetails}>
        {!details ? "Show details" : "Hide details"}
      </button>
      {details && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, appRoot);
};

render();
