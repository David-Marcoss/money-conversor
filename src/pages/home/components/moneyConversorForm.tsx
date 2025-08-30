import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MoneySelectField } from "./moneySelectField";
import { MoneyInputField } from "./moneyInputField";
import { useState } from "react";
import { formatCurrency } from "@/shared/utils/formatInputValues";

export function MoneyConversorForm() {
  const [amount, setAmount] = useState(formatCurrency("0"));
  const [convertedAmount, setConvertedAmount] = useState(formatCurrency("0"));

  const [fromCurrency, setFromCurrency] = useState("BRL");
  const [toCurrency, setToCurrency] = useState("EUR");

  return (
    <Card className="flex flex-col w-[650px] h-[520px] shadow-xl rounded-2xl bg-card text-card-foreground">
      {/* Cabeçalho */}
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Taxa de câmbio comercial
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          R$1 BRL = 0,1576 EUR
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-center gap-6 px-6">
        <div className="flex items-end justify-between gap-4">
          <MoneyInputField value={amount} setValue={setAmount} />
          <MoneySelectField />
        </div>

        <div className="flex items-center justify-center">
          <ArrowUpDown className="w-6 h-6 text-muted-foreground" />
        </div>

        <div className="flex items-end justify-between gap-4">
          <MoneyInputField
            value={convertedAmount}
            setValue={setConvertedAmount}
          />
          <MoneySelectField />
        </div>
      </CardContent>

      {/* Rodapé */}
      <CardFooter className="flex justify-end">
        <Button className="w-full sm:w-auto">Converter</Button>
      </CardFooter>
    </Card>
  );
}
