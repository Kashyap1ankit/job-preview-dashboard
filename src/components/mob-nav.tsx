import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Button from "./ui/button";
import Jobsicon from "../assets/svgs/jobs.svg";
import MessageIcon from "../assets/svgs/message.svg";
import PaymentsIcon from "../assets/svgs/payments.svg";
import ThreeLineIcon from "../assets/svgs/threeline.svg";
import ImageComp from "./ui/image";
import NotificationIcon from "../assets/svgs/notification.svg";
import Atlassian from "../assets/svgs/atlassian.svg";
import DropDrownIcon from "../assets/svgs/dropdown.svg";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function MobNav() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <ImageComp link={ThreeLineIcon} className="size-6 " />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="mt-12"></SheetTitle>
            <SheetDescription>
              <>
                <Button
                  text="Jobs"
                  icon={Jobsicon}
                  iconClassName="size-6 invert"
                  className="flex justify-evenly  py-2 px-2 rounded-full w-24 bg-primaryBg text-white text-lg border-2 border-jobsBorder mr-8 font-roboto item-center xsm:w-full sm:w-3/4 mx-auto"
                />

                <Button
                  text="Messages"
                  icon={MessageIcon}
                  iconClassName="size-6 mr-2"
                  className="flex justify-evenly items-center py-2 px-2 rounded-full w-24  text-gray-400 text-lg  mr-8 w-full mt-4"
                />

                <Button
                  text="Payments"
                  icon={PaymentsIcon}
                  iconClassName="size-6 mr-2"
                  className="flex justify-evenly items-center py-2 px-2 rounded-full w-24  text-gray-400 text-lg  mr-8 w-full mt-4"
                />

                <span className="flex justify-evenly items-center  px-8 mt-4">
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
                </span>
              </>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
