import "./App.css";
import Navbar from "./components/navbar";
import TabsComp from "./components/tabs";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Separator className="w-full" />
      <TabsComp />
    </div>
  );
}

export default App;
