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
      <main className="flex justify-center place-items-center">
        <div className="calculatorHolder p-5 border-foreground"></div>
        <div className="screen p-10 ">
          <div className="numpad">
            <div className="etc">
              <Button>%</Button>
              <Button>CE</Button>
              <Button>C</Button>
              <Button>Del</Button>
            </div>
            {/* 789 */}
            <div className="top">
              <Button>7</Button>
              <Button>8</Button>
              <Button>9</Button>
            </div>
            {/* 456 */}
            <div className="mid">
              <Button>4</Button>
              <Button>5</Button>
              <Button>6</Button>
            </div>
            {/* 123 */}
            <div className="low">
              <Button>1</Button>
              <Button>2</Button>
              <Button>3</Button>
            </div>
            {/* -0. */}
            <div className="lower">
              <Button>-</Button>
              <Button>0</Button>
              <Button>.</Button>
            </div>
          </div>
          <div className="operator">
            <Button>/</Button>
            <Button>x</Button>
            <Button>-</Button>
            <Button>+</Button>
            <Button>=</Button>
          </div>
        </div>
      </main>
    </>
  );
}
