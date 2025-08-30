import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MoneySelectField() {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-muted-foreground">
        Moeda:
      </label>
      <Select>
        <SelectTrigger className="w-[200px] h-12">
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent className="max-h-28 overflow-y-auto bg-black">
          <SelectItem value="USD">USD</SelectItem>
          <SelectItem value="EUR">EUR</SelectItem>
          <SelectItem value="BRL">BRL</SelectItem>
          <SelectItem value="JPY">JPY</SelectItem>
          <SelectItem value="GBP">GBP</SelectItem>
          <SelectItem value="CAD">CAD</SelectItem>
          <SelectItem value="AUD">AUD</SelectItem>
          <SelectItem value="CHF">CHF</SelectItem>
          <SelectItem value="ARS">ARS</SelectItem>
          <SelectItem value="CNY">CNY</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
