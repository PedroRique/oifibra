import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Banner } from "./components/Banner/Banner";
import { Devices } from "./components/Devices/Devices";
import { Benefits } from "./components/Benefits/Benefits";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-screen">
      <Banner />

      <Devices />

      <Benefits />

      <Footer />
    </main>
  );
}
