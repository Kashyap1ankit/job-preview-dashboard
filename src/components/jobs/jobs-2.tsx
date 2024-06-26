import Button from "../ui/button";
import { Separator } from "../ui/separator";
import StackComp from "../ui/stack";
import FigmaIcon from "../../assets/svgs/figma.svg";
import XDIcon from "../../assets/svgs/xd.svg";
import IllustratorIcon from "../../assets/svgs/illustrator.svg";
import Title from "../ui/title";
export default function Jobs2Comp() {
  return (
    <div>
      <div className="py-12 px-24 grid grid-cols-4 ">
        <StackComp text="Skills Required" className="font-roboto text-gray-500">
          <div className="mt-4">
            <Button
              text="Figma"
              className="flex border-2 px-2 py-1 rounded-md text-sm"
              icon={FigmaIcon}
              iconClassName="size-4 mr-2"
            />
            <Button
              text="Adobe Illustrator"
              className="flex gap-2 border-2 px-2 py-1 rounded-md mt-4 text-sm"
              icon={IllustratorIcon}
              iconClassName="size-6"
            />
            <Button
              text="Adobe XD"
              className="flex gap-2 border-2 px-2 py-1 rounded-md mt-4 text-sm"
              icon={XDIcon}
              iconClassName="size-6"
            />
          </div>
        </StackComp>

        <StackComp
          text="Preferred Language"
          className="font-roboto text-gray-500"
        >
          <Title text="English" className="text-black font-bold mt-4" />
        </StackComp>

        <StackComp text="Type" className="font-roboto text-gray-500">
          <Title text="Full Time" className="text-black font-bold mt-4" />
        </StackComp>

        <StackComp
          text="Year Of Experience"
          className="font-roboto text-gray-500"
        >
          <Title
            text="3+ Year of Experience"
            className="text-black font-bold mt-4"
          />
        </StackComp>
      </div>
      <Separator />
    </div>
  );
}
