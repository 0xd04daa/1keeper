import Navbar from "@/components/Navbar";
import FilterTabs from "@/components/FilterTabs";
import TokenTable from "@/components/TokenTable";
import { Input } from "@/components/ui/input";
import { Search, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Trading = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FilterTabs />

      <div className="container mx-auto px-4 py-6">
        {/* Search and Filters */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="搜索代币名称或合约地址..."
              className="pl-10 bg-card border-border"
            />
          </div>
          <Button variant="outline" size="icon" className="border-border hover:bg-secondary">
            <Settings2 className="w-4 h-4" />
          </Button>
        </div>

        {/* Token Table */}
        <TokenTable />
      </div>
    </div>
  );
};

export default Trading;
