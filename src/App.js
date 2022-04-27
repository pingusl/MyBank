import "./App.css";
import Header from "./components/Header";
import Accounts from "./components/Accounts";
const firstName = "Sébastien";
function App() {
  return (
    <div className="App">
      <Header userName={firstName} />
      <Accounts />
    </div>
  );
}

export default App;
