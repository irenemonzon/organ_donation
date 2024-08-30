import Image from "next/image";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <NavBar/>
     <h1>Organ donation</h1>
    </main>
  );
}
