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
            <div>%</div>
            <div>CE</div>
            <div>C</div>
            <div>Del</div>
            {/* 789 */}
            <div>7</div>
            <div>8</div>
            <div>9</div>
            {/* 456 */}
            <div>4</div>
            <div>5</div>
            <div>6</div>
            {/* 123 */}
            <div>1</div>
            <div>2</div>
            <div>3</div>
            {/* -0. */}
            <div>-</div>
            <div>0</div>
            <div>.</div>
          </div>
          <div className="operator">
            <div>/</div>
            <div>x</div>
            <div>-</div>
            <div>+</div>
            <div>=</div>
          </div>
        </div>
      </main>
    </>
  );
}
