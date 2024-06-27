import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import JobsContent from "./jobs/jobs-contetn";
import { Separator } from "./ui/separator";

export default function TabsComp() {
  return (
    <div>
      <Tabs defaultValue="Job">
        <TabsList className="xsm:flex xsm:justify-start xsm:whitespace-nowrap md:py-8 md:px-12 xsm:overflow-x-scroll xsm:overflow-y-hidden md:overflow-x-hidden">
          <TabsTrigger value="Job" className="md:text-lg ">
            Job Preview
          </TabsTrigger>
          <TabsTrigger value="Applications" className="md:text-lg ">
            Applications
          </TabsTrigger>
          <TabsTrigger value="Match" className="md:text-lg ">
            Match
          </TabsTrigger>
          <TabsTrigger value="Messages" className="md:text-lg ">
            Messages
          </TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent value="Job" className="mt-4">
          <JobsContent />
        </TabsContent>
        <TabsContent value="Applications">
          <div className="xsm:px-4 md:px-24 py-12 text-primaryBg font-roboto font-bold xsm:text-xl md:text-2xl tracking-wider">
            Application Under Progress
          </div>
        </TabsContent>
        <TabsContent value="Match">
          <div className="xsm:px-4 md:px-24 py-12 text-primaryBg font-roboto font-bold  xsm:text-xl md:text-2xl tracking-wider">
            Nothing To Show Here{" "}
          </div>
        </TabsContent>
        <TabsContent value="Messages">
          <div className="xsm:px-4 md:px-24 py-12 text-primaryBg font-roboto font-bold  xsm:text-xl md:text-2xl tracking-wider">
            Work In Progress
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
