import Button from "./ui/button";
import Jobsicon from "../assets/svgs/jobs.svg";
import MessageIcon from "../assets/svgs/message.svg";
import PaymentsIcon from "../assets/svgs/payments.svg";
import NotificationIcon from "../assets/svgs/notification.svg";
import Atlassian from "../assets/svgs/atlassian.svg";
import DropDrownIcon from "../assets/svgs/dropdown.svg";
import ImageComp from "./ui/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import AtlassianIcon from "../assets/svgs/atlassian.svg";
import MobNav from "./mob-nav";

export default function Navbar() {
  return (
    <div>
      <div className=" xsm:mb-20 md:mb-24 z-50 ">
        <div className="bg-white fixed top-0 left-0 flex w-screen justify-between px-8 py-4 border-b-2 border-primaryBg ">
          {/* Left side Navigation  */}
          <div>
            <ImageComp
              link={AtlassianIcon}
              className="xsm:size-8 md:size-12 rounded-md"
            />
          </div>

          {/* Middle Part Navigation  */}
          <div className=" xsm:hidden lg:flex justify-evenly items-center border-2 py-2 px-2 rounded-full">
            <Button
              text="Jobs"
              icon={Jobsicon}
              iconClassName="size-6 invert"
              className="flex justify-evenly  py-2 px-2 rounded-full w-24 bg-primaryBg text-white text-lg border-2 border-jobsBorder mr-8 font-roboto item-center"
            />

            <Button
              text="Messages"
              icon={MessageIcon}
              iconClassName="size-6 mr-2"
              className="flex justify-evenly items-center py-2 px-2 rounded-full w-24  text-gray-400 text-lg  mr-8"
            />

            <Button
              text="Payments"
              icon={PaymentsIcon}
              iconClassName="size-6 mr-2"
              className="flex justify-evenly items-center py-2 px-2 rounded-full w-24  text-gray-400 text-lg  mr-8"
            />
          </div>

          {/* Right Side Navigation  */}
          <div className="xsm:hidden lg:flex justify-evenly items-center  px-8">
            <ImageComp link={NotificationIcon} className="size-8 mr-4" />
            <Avatar className="mr-2">
              <AvatarImage src={Atlassian} />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <ImageComp link={DropDrownIcon} className="size-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Nav  */}
          <div className="lg:hidden">
            <MobNav />
          </div>
        </div>
      </div>
    </div>
  );
}
