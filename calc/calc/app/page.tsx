import Image from "next/image";
import { Button } from "../components/ui/button";
import { ModeToggle } from "@/components/lnd";

export default function Home() {
  return (
    <>
      <nav className="flex justify-end place-items-end">
        <div className="pt-7 pr-7">
          <ModeToggle />
        </div>
      </nav>
      {/* main */}
      <div className="flex justify-center items-center py-10 ">
        <div className="screen p-10 border-white rounded-sm border flex justify-center place-items-center w-80">
          <form action="input">zxc</form>
        </div>
      </div>
      <main className="flex justify-center place-items-center">
        <div className="calculatorHolder p-5 border border-white ">
          <div className="numpad">
            <div className="etc">
              <Button className="button text-base">%</Button>
              <Button className="button text-base">C</Button>
              <Button className="button text-base">Del</Button>
              <Button className="button text-base">/</Button>
            </div>
            {/* 789 */}
            <div className="buttonTop">
              <Button className="button text-xl ">7</Button>
              <Button className="button text-xl ">8</Button>
              <Button className="button text-xl ">9</Button>
              <Button className="button text-xl">x</Button>
            </div>
            {/* 456 */}
            <div className="buttonMid">
              <Button className="button text-xl ">4</Button>
              <Button className="button text-xl ">5</Button>
              <Button className="button text-xl ">6</Button>
              <Button className="button text-xl">-</Button>
            </div>
            {/* 123 */}
            <div className="buttonLow">
              <Button className="button text-xl ">1</Button>
              <Button className="button text-xl ">2</Button>
              <Button className="button text-xl ">3</Button>
              <Button className="button text-xl">+</Button>
            </div>
            {/* -0. */}
            <div className="buttonLower">
              <Button className="button text-xl ">-</Button>
              <Button className="button text-xl ">0</Button>
              <Button className="button text-xl ">.</Button>
              <Button className="button text-xl">=</Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
