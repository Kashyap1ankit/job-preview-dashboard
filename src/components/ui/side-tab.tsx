import ImageComp from "./image";
import { Separator } from "./separator";
import Title from "./title";

export default function SideTabComp({
  icon,
  text,
  number,
}: {
  icon: string;
  text: string;
  number: string;
}) {
  return (
    <div className="p-4 mt-2">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <ImageComp link={icon} className="size-6" />
          <Title text={text} className="text-gray-500 font-roboto" />
        </div>

        <Title text={number} className="text-black font-bold " />
      </div>
      <Separator className="mt-4" />
    </div>
  );
}
