import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import type { ISelectOptions } from "@/shared/interfaces/ISelectOptions";
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

import { Button } from "@/components/ui/button";

interface MoneySelectFieldProps {
  value: string;
  selectOptions: ISelectOptions[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function MoneySelectField({
  value,
  selectOptions,
  setValue,
}: MoneySelectFieldProps) {
  const [open, setOpen] = React.useState(false);

  const selectedLabel =
    selectOptions.find((option) => option.value === value)?.label ??
    "Selecione";

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-muted-foreground">
        Moeda:
      </label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] h-12 justify-between bg-card"
          >
            {selectedLabel}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 bg-black">
          <Command>
            <CommandInput placeholder="Buscar moeda..." />
            <CommandList>
              <CommandEmpty>Nenhuma moeda encontrada.</CommandEmpty>
              <CommandGroup className="max-h-40 overflow-y-auto">
                {selectOptions.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        value === option.value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
