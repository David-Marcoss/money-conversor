export const formatCurrency = (value: string | number): string => {
  let isNegative = false;
  if (typeof value === "number") {
    value = value.toFixed(2);
    const convertedValue = Number(value);
    isNegative = typeof convertedValue === "number" && convertedValue < 0;
  }

  value = value.replace(/\D/g, "");
  if (!value) return "R$ 0,00";

  return `R$ ${isNegative ? "-" : ""} ${(
    parseFloat(value) / 100
  ).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};
