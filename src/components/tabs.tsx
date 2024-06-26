import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import JobsContent from "./jobs/jobs-contetn";
import { Separator } from "./ui/separator";

export default function TabsComp() {
  return (
    <div>
      <Tabs defaultValue="Job">
        <TabsList className="py-6 px-12">
          <TabsTrigger value="Job" className="text-lg ">
            Job Preview
          </TabsTrigger>
          <TabsTrigger value="Applications" className="text-lg ">
            Applications
          </TabsTrigger>
          <TabsTrigger value="Match" className="text-lg ">
            Match
          </TabsTrigger>
          <TabsTrigger value="Messages" className="text-lg ">
            Messages
          </TabsTrigger>
        </TabsList>
        <Separator />
        <TabsContent value="Job" className="mt-4">
          <JobsContent />
        </TabsContent>
        <TabsContent value="Applications">
          <div className="px-24 py-12 text-primaryBg font-roboto font-bold text-2xl tracking-wider">
            Application Under Progress
          </div>
        </TabsContent>
        <TabsContent value="Match">
          {" "}
          <div className="px-24 py-12 text-primaryBg font-roboto font-bold text-2xl tracking-wider">
            Nothing To Show Here{" "}
          </div>
        </TabsContent>
        <TabsContent value="Messages">
          <div className="px-24 py-12 text-primaryBg font-roboto font-bold text-2xl tracking-wider">
            Work In Progress
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
