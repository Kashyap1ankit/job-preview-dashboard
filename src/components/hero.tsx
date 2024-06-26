import SideBar from "./sidebar";
import TabsComp from "./tabs";

export default function Hero() {
  return (
    <div className="grid grid-cols-4 w-screen">
      <div className="col-span-3">
        <TabsComp />
      </div>

      <div className="col-span-1 border-l-2 h-full">
        <SideBar />
      </div>
    </div>
  );
}
