import ExampleComponent from "./components/ExampleComponent";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <Hero />
      </div>
      <Experience />
      <ExampleComponent />
    </>
  );
}
