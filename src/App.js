import "./App.css";
import Parent from "./Mathods/Parent";
import DataByRedux from "./Mathods/DataByRedux";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Communication Methods</p>
      </header>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div className="col-sm">
            <Parent />
          </div>
          <div className="col-sm">
            <DataByRedux />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
