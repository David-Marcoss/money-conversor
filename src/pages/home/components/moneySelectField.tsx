import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ISelectOptions } from "@/shared/interfaces/ISelectOptions";

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
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-muted-foreground">
        Moeda:
      </label>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[200px] h-12">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent className="max-h-28 overflow-y-auto bg-black">
          {selectOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              onClick={() => setValue(option.value)}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
