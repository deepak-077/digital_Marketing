import Image from "next/image";
import Navbar from "./components/Navbar";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Sixth from "./components/Sixth";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
    </div>
  );
}
