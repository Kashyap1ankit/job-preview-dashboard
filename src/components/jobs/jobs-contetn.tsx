import SideBar from "../sidebar";
import Jobs1Comp from "./jobs-1";
import Jobs2Comp from "./jobs-2";
import Jobs3Comp from "./jobs-3";
import Jobs4Comp from "./jobs-4";

export default function JobsContent() {
  return (
    <div className="grid grid-cols-4 w-screen">
      <div className="xsm:col-span-4 xl:col-span-3">
        <Jobs1Comp />
        <Jobs2Comp />
        <Jobs3Comp />
        <Jobs4Comp />
      </div>

      <div className="xsm:col-span-4 xl:col-span-1 border-l-2 h-full">
        <SideBar />
      </div>
    </div>
  );
}
