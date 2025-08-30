import { Input } from "@/components/ui/input";

export function MoneyInputField() {
  return (
    <div className="flex flex-col w-full gap-2">
      <label
        htmlFor="amount"
        className="text-sm font-medium text-muted-foreground"
      >
        Valor:
      </label>
      <Input
        id="amount"
        type="number"
        placeholder="Digite o valor"
        className="h-12"
      />
    </div>
  );
}
