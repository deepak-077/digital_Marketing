import Image from "next/image";
import Navbar from "./components/Navbar";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Second/>
      <Third/>
      <Fourth/>
    </div>
  );
}
