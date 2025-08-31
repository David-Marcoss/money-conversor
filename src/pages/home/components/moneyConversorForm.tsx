import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowUpDown } from "lucide-react";
import { MoneySelectField } from "./moneySelectField";
import { MoneyInputField } from "./moneyInputField";
import { useEffect, useState } from "react";
import {
  formatBrlStringToNumber,
  formatCurrency,
} from "@/shared/utils/formatInputValues";
import type { ISelectOptions } from "@/shared/interfaces/ISelectOptions";
import { MoneyConversorService } from "@/shared/services/moneyConversorService/moneyConversorService";

export function MoneyConversorForm() {
  const [amount, setAmount] = useState(formatCurrency("0"));
  const [convertedAmount, setConvertedAmount] = useState(formatCurrency("0"));

  const [fromCurrency, setFromCurrency] = useState("BRL");
  const [toCurrency, setToCurrency] = useState("EUR");

  const [conversionRate, setConversionRate] = useState<number | null>(null);

  const [selectOptions, setSelectOptions] = useState<ISelectOptions[]>([
    { value: "BRL", label: "Real Brasileiro" },
    { value: "EUR", label: "Euro" },
    { value: "USD", label: "Dólar Americano" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      const currencies = await MoneyConversorService.getAvailableCurrencies();
      setSelectOptions(currencies);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchConversionRate = async () => {
      const rate = await MoneyConversorService.getConversionRate(
        toCurrency,
        fromCurrency
      );

      setConversionRate(rate);
    };

    fetchConversionRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    const fetchConversion = async () => {
      const numericAmount = formatBrlStringToNumber(amount);

      const converted = await MoneyConversorService.convertCurrency(
        numericAmount,
        fromCurrency,
        toCurrency
      );
      setConvertedAmount(formatCurrency(converted));
    };

    fetchConversion();
  }, [amount, fromCurrency, toCurrency]);

  const handleInvertCurrencies = () => {
    const previousFromCurrency = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(previousFromCurrency);

    const previousConvertedAmount = convertedAmount;
    setConvertedAmount(amount);
    setAmount(previousConvertedAmount);
  };

  return (
    <Card className="flex flex-col w-96 h-[600px] md:w-[650px] md:h-[520px] shadow-xl rounded-2xl bg-card text-card-foreground">
      {/* Cabeçalho */}
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Taxa de câmbio comercial
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          {conversionRate
            ? `1 ${fromCurrency} = ${conversionRate} ${toCurrency}`
            : "Carregando..."}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-center gap-6 px-6">
        <div className="flex items-end justify-between gap-4">
          <MoneyInputField value={amount} setValue={setAmount} label="Valor:" />
          <MoneySelectField
            value={fromCurrency}
            setValue={setFromCurrency}
            selectOptions={selectOptions}
          />
        </div>

        <div className="flex items-center justify-center w-full">
          <button
            className="flex items-center justify-center bg-yellow-500 rounded-full w-12 h-12 hover:opacity-80 transition-opacity"
            onClick={handleInvertCurrencies}
          >
            <ArrowUpDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>

        <div className="flex items-end justify-between gap-4">
          <MoneyInputField
            label="Valor Convertido: "
            value={convertedAmount}
            setValue={setConvertedAmount}
            disabled
          />
          <MoneySelectField
            value={toCurrency}
            setValue={setToCurrency}
            selectOptions={selectOptions}
          />
        </div>
      </CardContent>

      {/* Rodapé */}
      <CardFooter className="flex justify-end">
        <span className="text-gray-400">Desenvolvido por David Marcos</span>
      </CardFooter>
    </Card>
  );
}
