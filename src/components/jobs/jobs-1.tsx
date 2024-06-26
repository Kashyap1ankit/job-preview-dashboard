import Button from "../ui/button";
import Title from "../ui/title";
import DotIcon from "../../assets/svgs/dot.svg";
import LocationIcon from "../../assets/svgs/location.svg";
import CoinStackIcon from "../../assets/svgs/coinstack.svg";
import { Separator } from "../ui/separator";

export default function Jobs1Comp() {
  return (
    <div>
      <div className="px-24">
        {/* First Part  */}
        <div className="flex gap-4 text-sm items-start">
          <Title
            text="Senior Product Designer"
            className="text-3xl font-bold text-zinc700 font-roboto tracking-wide"
          />
          <div className="flex gap-4 ">
            <Title text="posted 2 days ago" className="text-gray-300" />
            <Button
              text="Open"
              className="flex justify-between items-center bg-lightgreenBg px-2 rounded-full text-darkgreenBg text-sm border-2 border-openBtnBorder"
              icon={DotIcon}
              iconClassName="size-2 mr-1"
            />
          </div>
        </div>

        {/* Second Part  */}

        <div className="mt-8 flex gap-12">
          <Button
            text="Delaware , USA"
            className="flex gap-2 text-gray-500 text-lg font-roboto"
            icon={LocationIcon}
            iconClassName="size-6"
          />

          <Button
            text="$300k - $400k"
            className="flex gap-2 text-gray-500 text-lg font-roboto"
            icon={CoinStackIcon}
            iconClassName="size-6"
          />
        </div>
      </div>
      <Separator className="mt-8 w-full" />
    </div>
  );
}
