import "./App.css";

import Navbar from "./components/navbar";
import TabsComp from "./components/tabs";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <TabsComp />
    </div>
  );
}

export default App;
