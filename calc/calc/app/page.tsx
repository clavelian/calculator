import Image from "next/image";
import { ModeToggle } from "@/components/lnd";
import { ShootingStarsAndStarsBackgroundDemo } from "../components/stars";
import Calc from "../components/main";
export default function Home() {
  return (
    <>
      {/* crop the screen to a single page */}
      <main className="">
        <ShootingStarsAndStarsBackgroundDemo />
        <nav className="relative top-[-97vh] left-10 h-0 w-0">
          <ModeToggle />
        </nav>
        <div className="relative top-[-89vh] h-0">
          <Calc />
        </div>
      </main>
    </>
  );
}
