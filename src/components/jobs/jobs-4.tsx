import AtlassianIcon from "../../assets/svgs/atlassian.svg";
import Button from "../ui/button";
import StackComp from "../ui/stack";
import Title from "../ui/title";

export default function Jobs4Comp() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 px-24 py-12 w-11/12">
        <Button
          text="Atlassian"
          icon={AtlassianIcon}
          className="flex items-center text-xl font-roboto text-slate500 gap-2 col-span-2"
          iconClassName="size-12"
        />

        <StackComp
          text="Company Size"
          className="text-gray-500 font-roboto text-sm "
        >
          <Title text="1k - 2k Employees" className="text-slate500" />
        </StackComp>

        <StackComp text="Type" className="text-gray-500 font-roboto text-sm ">
          <Title text="Private" className="text-slate500" />
        </StackComp>

        <StackComp text="Sector" className="text-gray-500 font-roboto text-sm ">
          <Title
            text="Information Technology , Infrastructure"
            className="text-slate500"
          />
        </StackComp>

        <StackComp
          text="Funding"
          className="text-gray-500 font-roboto text-sm "
        >
          <Title text="Bootstrapped" className="text-slate500" />
        </StackComp>

        <StackComp
          text="Founded In"
          className="text-gray-500 font-roboto text-sm "
        >
          <Title text="2019" className="text-slate500" />
        </StackComp>

        <StackComp
          text="Founded By"
          className="text-gray-500 font-roboto text-sm "
        >
          <Title
            text="Scott Farquhar , Mike Cannon - Brookes"
            className="text-slate500"
          />
        </StackComp>
      </div>
    </div>
  );
}
