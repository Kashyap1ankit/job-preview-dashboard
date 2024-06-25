import Button from "./ui/button";
import Title from "./ui/title";
import DotIcon from "../../public/svgs/dot.svg";
export default function JobsContent() {
  return (
    <div>
      <div className="flex items-baseline">
        <Title text="Senior Product Designer" className="text-4xl font-bold" />
        <Title text="posted 2 days ago" className="text-gray-200" />
        <Button
          text="Open"
          className="flex bg-lightgreenBg px-2 rounded-full text-darkgreenBg font-bold"
          icon={DotIcon}
        />
      </div>
    </div>
  );
}
