import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Separator className="w-full" />
      <Hero />
    </div>
  );
}

export default App;
