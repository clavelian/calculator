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
        <div className="screen p-10 border-white rounded-sm border flex justify-center place-items-center"></div>
      </div>
      <main className="flex justify-center place-items-center">
        <div className="calculatorHolder p-5 border border-white "></div>
        <div className="numpad">
          <div className="etc">
            <Button className="mr-0.5">%</Button>
            <Button className="mr-0.5">C</Button>
            <Button className="mr-0.5">Del</Button>
          </div>
          {/* 789 */}
          <div className="top">
            <Button className="text-xl mr-0.5 mt-0.5">7</Button>
            <Button className="text-xl mr-0.5 mt-0.5">8</Button>
            <Button className="text-xl mr-0.5 mt-0.5">9</Button>
          </div>
          {/* 456 */}
          <div className="mid">
            <Button className="text-xl mr-0.5 mt-0.5">4</Button>
            <Button className="text-xl mr-0.5 mt-0.5">5</Button>
            <Button className="text-xl mr-0.5 mt-0.5">6</Button>
          </div>
          {/* 123 */}
          <div className="low">
            <Button className="text-xl mr-0.5 mt-0.5">1</Button>
            <Button className="text-xl mr-0.5 mt-0.5">2</Button>
            <Button className="text-xl mr-0.5 mt-0.5">3</Button>
          </div>
          {/* -0. */}
          <div className="lower">
            <Button className="text-xl mr-0.5 mt-0.5">-</Button>
            <Button className="text-xl mr-0.5 mt-0.5">0</Button>
            <Button className="text-xl mr-0.5 mt-0.5">.</Button>
          </div>
        </div>
      </main>
      <div className="flex-col">
        <div className="operator flex-col">
          <Button className="mr-0.5 mt-0.5">/</Button>
          <Button className="mr-0.5 mt-0.5">x</Button>
          <Button className="mr-0.5 mt-0.5">-</Button>
          <Button className="mr-0.5 mt-0.5">+</Button>
          <Button className="mr-0.5 mt-0.5">=</Button>
        </div>
      </div>
    </>
  );
}
