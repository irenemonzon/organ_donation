import NavBar from "./components/NavBar";
import Title from "./components/Title";
import InfoOrganDonate from "./components/InfoOrganDonate";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <NavBar/>
      <Title/>
      <InfoOrganDonate/>
      <Footer/>
    </main>
  );
}
