import { Separator } from "../ui/separator";
import Title from "../ui/title";

export default function Jobs3Comp() {
  return (
    <div>
      <div className="px-24 py-12">
        <ul className="text-slate500 mt-4 font-roboto list-decimal">
          <Title text="About the job" className="text-gray-500 font-roboto" />
          <li className="ml-4">Handle the UI/UX research desging</li>
          <li className="ml-4">
            Work on researching on latest web applications designs & trends
          </li>
          <li className="ml-4">Work on conceptualizing and visualizing</li>
          <li className="ml-4">
            Work on creating graphics content and other graphic related works
          </li>
        </ul>

        <ul className="list-disc text-slate500  font-roboto">
          <Title text="Benefits" className="text-gray-500 font-roboto mt-4" />
          <li className="ml-4">Health Insurance</li>
          <li className="ml-4">Provided Fund</li>
        </ul>

        <ul className="list-disc text-slate500  font-roboto">
          <Title text="Schedule" className="text-gray-500 font-roboto mt-4" />
          <li className="ml-4">Day Shift</li>
        </ul>

        <ul className="list-disc text-slate500  font-roboto">
          <Title
            text="Supplemental pay types: "
            className="text-gray-500 font-roboto mt-4"
          />
          <li className="ml-4">Performance bonus</li>
          <li className="ml-4">Yearly bonus</li>
        </ul>

        <Title
          text="Work Location : In person"
          className="mt-2 text-slate700 font-roboto"
        />
      </div>
      <Separator />
    </div>
  );
}
