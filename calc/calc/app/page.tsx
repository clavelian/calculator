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
            <div>789</div>
            <div>456</div>
            <div>123</div>
          </div>
          <div className="operator">
            <div>-</div>
            <div>+</div>
            <div>/</div>
            <div>*</div>
          </div>
        </div>
      </main>
    </>
  );
}
