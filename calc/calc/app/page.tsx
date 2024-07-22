import Image from "next/image";
import { Button } from "../components/ui/button";
import { ModeToggle } from "@/components/lnd";

export default function Home() {
  return (
    <>
      <nav>
        <ModeToggle />
      </nav>
    </>
  );
}
