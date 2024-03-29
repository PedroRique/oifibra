import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Banner } from "./components/Banner/Banner";
import { BrandsLogos } from "./components/BrandsLogos/BrandsLogos";

export default function Home() {
  return (
    <main className="w-screen">
      <Banner />

      <BrandsLogos />
    </main>
  );
}
