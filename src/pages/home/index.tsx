import { MoneyConversorForm } from "./components/moneyConversorForm";

export function HomePage() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="flex items-center justify-center w-[400px] h-10 my-14">
        <h1 className="text-4xl text-yellow-500 font-extrabold whitespace-nowrap">
          Conversor de Moedas
        </h1>

        <img
          className=" text-yellow-500 ml-2"
          src="/cifrao.png"
          width={30}
          height={30}
        />
      </div>
      <MoneyConversorForm />
    </div>
  );
}
