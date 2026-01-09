import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Zap, Search, Flame } from "lucide-react";

const FilterTabs = () => {
  const [activeTab, setActiveTab] = useState("screener");

  return (
    <div className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start bg-transparent h-12 p-0 space-x-1">
            <TabsTrigger
              value="trending"
              className="data-[state=active]:bg-secondary data-[state=active]:text-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              前
            </TabsTrigger>
            <TabsTrigger
              value="rising"
              className="data-[state=active]:bg-secondary data-[state=active]:text-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              趋势
            </TabsTrigger>
            <TabsTrigger
              value="hot"
              className="data-[state=active]:bg-secondary data-[state=active]:text-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6"
            >
              <Flame className="w-4 h-4 mr-2" />
              激增
            </TabsTrigger>
            <TabsTrigger
              value="screener"
              className="data-[state=active]:bg-secondary data-[state=active]:text-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary px-6"
            >
              <Search className="w-4 h-4 mr-2" />
              DEX Screener
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default FilterTabs;
