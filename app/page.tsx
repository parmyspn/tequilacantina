import Image from "next/image";
import MenuTabs from "./tabs";
import menuData from "./menuData";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomePage />
    </main>
  );
}
