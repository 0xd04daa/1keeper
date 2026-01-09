import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Token {
  symbol: string;
  name: string;
  address: string;
  price: number;
  change24h: number;
}

const mockTokens: Token[] = [
  { symbol: "PEPE", name: "Pepe", address: "0x123...", price: 0.00000123, change24h: 15.5 },
  { symbol: "DOGE", name: "Dogecoin", address: "0x456...", price: 0.08, change24h: -3.2 },
  { symbol: "SHIB", name: "Shiba Inu", address: "0x789...", price: 0.000008, change24h: 8.7 },
  { symbol: "BONK", name: "Bonk", address: "0xabc...", price: 0.0000015, change24h: 22.1 },
  { symbol: "WIF", name: "dogwifhat", address: "0xdef...", price: 1.23, change24h: -5.3 },
];

interface TokenSearchProps {
  onSelectToken?: (token: Token) => void;
}

const TokenSearch = ({ onSelectToken }: TokenSearchProps) => {
  const [open, setOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token>(mockTokens[0]);

  const handleSelectToken = (token: Token) => {
    setSelectedToken(token);
    setOpen(false);
    onSelectToken?.(token);
  };

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-card border-border hover:bg-secondary"
          >
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2">
                <span className="text-xs font-bold text-primary">{selectedToken.symbol[0]}</span>
              </div>
              <div className="text-left">
                <div className="font-semibold">{selectedToken.symbol}</div>
                <div className="text-xs text-muted-foreground">{selectedToken.name}</div>
              </div>
            </div>
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandInput placeholder="Search token..." />
            <CommandList>
              <CommandEmpty>No token found.</CommandEmpty>
              <CommandGroup>
                {mockTokens.map((token) => (
                  <CommandItem
                    key={token.address}
                    value={token.symbol}
                    onSelect={() => handleSelectToken(token)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                          <span className="text-sm font-bold text-primary">{token.symbol[0]}</span>
                        </div>
                        <div>
                          <div className="font-semibold">{token.symbol}</div>
                          <div className="text-xs text-muted-foreground">{token.name}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">${token.price.toFixed(8)}</div>
                        <div
                          className={`text-xs ${
                            token.change24h >= 0 ? "text-success" : "text-destructive"
                          }`}
                        >
                          {token.change24h >= 0 ? "+" : ""}
                          {token.change24h.toFixed(2)}%
                        </div>
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TokenSearch;
