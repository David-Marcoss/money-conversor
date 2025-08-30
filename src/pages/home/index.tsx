import { MoneyConversorForm } from "./components/moneyConversorForm";

export function HomePage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex items-center justify-start w-96 h-10 my-14">
        <h1 className="text-4xl text-yellow-500 font-extrabold">
          Conversor de Moedas
        </h1>
      </div>
      <MoneyConversorForm />
    </div>
  );
}
