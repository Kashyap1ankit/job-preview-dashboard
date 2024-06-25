import Button from "./ui/button";
import Jobsicon from "../../public/svgs/jobs.svg";
import MessageIcon from "../../public/svgs/message.svg";
import PaymentsIcon from "../../public/svgs/payments.svg";
import NotificationIcon from "../../public/svgs/notification.svg";
import Atlassian from "../../public/svgs/atlassian.svg";
import DropDrownIcon from "../../public/svgs/dropdown.svg";
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

export default function Navbar() {
  return (
    <div className="mb-24">
      <div className="fixed top-4 left-0 flex w-screen justify-between px-4 ">
        {/* Left side Navigation  */}
        <div>
          <Button
            text="Logo"
            className="p-4 text-primaryBg bg-gray-300 font-bold"
          />
        </div>

        {/* Middle Part Navigation  */}
        <div className=" flex justify-evenly items-center border-2 py-2 px-2 rounded-full">
          <Button
            text="Jobs"
            icon={Jobsicon}
            iconClassName="size-6 invert"
            className="flex justify-evenly items-center py-2 px-2 rounded-full w-24 bg-primaryBg text-white text-lg border-2 border-jobsBorder mr-8"
          />

          <Button
            text="Messages"
            icon={MessageIcon}
            iconClassName="size-6 mr-2"
            className="flex justify-evenly items-center py-2 px-2 rounded-full w-24  text-gray-500 text-lg  mr-8"
          />

          <Button
            text="Payments"
            icon={PaymentsIcon}
            iconClassName="size-6 mr-2"
            className="flex justify-evenly items-center py-2 px-2 rounded-full w-24  text-gray-500 text-lg  mr-8"
          />
        </div>

        {/* Right Side Navigation  */}
        <div className="flex justify-evenly items-center  px-8">
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
      </div>
    </div>
  );
}
