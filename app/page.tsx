import Image from "next/image";
import HomeSection from "./HomeSection";
import MenuTabs from "./tabs";
import { MenuSection } from "./components/MenuSection";
import menuData from "./menuData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeSection />
      <MenuTabs />
    </main>
  );
}
