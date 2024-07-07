import "./App.css";
import FlashCards from "./FlashCards";
import data from "./data";

function App() {
  return (
    <div>
      <FlashCards data={data} />
    </div>
  );
}

export default App;
