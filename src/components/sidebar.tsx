import Button from "./ui/button";
import DeleteIcon from "../assets/svgs/delete.svg";
import EditIcon from "../assets/svgs/edit.svg";
import SideTabComp from "./ui/side-tab";
import ProfileIcon from "../assets/svgs/profile.svg";
import ProfileMatchedIcon from "../assets/svgs/profile-matched.svg";
import Message2Icon from "../assets/svgs/message-2.svg";
import EyeIcon from "../assets/svgs/eye.svg";
export default function SideBar() {
  return (
    <div className="p-8 bg-slate200 h-full">
      <div className="flex gap-6">
        <Button
          text="Delete Job"
          className="flex gap-2 bg-deleteBg px-4 py-2 text-primaryBg font-roboto rounded-md border-2 border-primaryBg"
          icon={DeleteIcon}
          iconClassName="size-6"
        />
        <Button
          text="Edit Job"
          className="flex gap-2 bg-primaryBg px-4 py-2 text-white font-roboto items-center"
          icon={EditIcon}
          iconClassName="size-4"
        />
      </div>

      <div className="mt-8">
        <SideTabComp text="Applicants" number="400" icon={ProfileIcon} />
        <SideTabComp text="Matches" number="100" icon={ProfileMatchedIcon} />
        <SideTabComp text="Messages" number="147" icon={Message2Icon} />
        <SideTabComp text="Views" number="800" icon={EyeIcon} />
      </div>
    </div>
  );
}
