import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import JobsContent from "./jobs-contetn";

export default function TabsComp() {
  return (
    <div className="">
      <Tabs className="p-8" defaultValue="Job">
        <TabsList>
          <TabsTrigger value="Job" className="text-xl ">
            Job Preview
          </TabsTrigger>
          <TabsTrigger value="Applications" className="text-xl ">
            Applications
          </TabsTrigger>
          <TabsTrigger value="Match" className="text-xl ">
            Match
          </TabsTrigger>
          <TabsTrigger value="Messages" className="text-xl ">
            Messages
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Job" className="border-2 mt-4 p-8">
          <JobsContent />
        </TabsContent>
        <TabsContent value="Applications">
          Change your password here.
        </TabsContent>
        <TabsContent value="Match">Change your password here.</TabsContent>
        <TabsContent value="Messages">Change your password here.</TabsContent>
      </Tabs>

      <Separator />
    </div>
  );
}
