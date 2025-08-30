import { Input } from "@/components/ui/input";
import { formatCurrency } from "@/shared/utils/formatInputValues";

interface IMoneyInputField {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function MoneyInputField({ label, value, setValue }: IMoneyInputField) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        htmlFor="amount"
        className="text-sm font-medium text-muted-foreground"
      >
        {label}
      </label>
      <Input
        id="amount"
        type="text"
        placeholder="Digite o valor"
        className="h-12"
        value={value}
        onChange={(e) => {
          setValue(formatCurrency(e.target.value));
        }}
      />
    </div>
  );
}
