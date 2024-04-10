import logo from "./logo.svg";
import "./App.css";

function App() {
  let names = [
    { name: "Jayan Hossen", father: "Al Mamun Hossen" },
    { name: "Ayan Hossen", father: "Al Mamun Hossen" },
    { name: "Al Mamun Hossen", father: "Zafar Hossain" },
    { name: "Yamen Munna", father:"Jammal Uddain" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        {
          names.map(name =>
            <Person name={name.name} father={name.father} address="Dhaka, Bangladesh"></Person>
          )
        }
      </header>
    </div>
  );
}

function Person(x) {
  const divStyle = {
    backgroundColor: "red",
    width: "230px",
    borderRadius: "8px",
    margin: '10px',
    lineHeight: "5px",
  }
  return (
    <div style={divStyle}>
      <h3>{x.name}</h3>
      <h5>{x.father}</h5>
      <p>{x.address}</p>
    </div>
  )

}

export default App;
