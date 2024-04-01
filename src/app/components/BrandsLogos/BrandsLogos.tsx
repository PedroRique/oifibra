import Image from "next/image";
import styles from "./BrandsLogos.module.scss";

export const BrandsLogos = () => {
  const brands = ["xbox", "ps5", "netflix", "spotify", "disney"];

  return (
    <div className="md:container flex justify-center">
      <div className="flex flex-wrap gap-4 items-center justify-between w-full p-6 z-10">
        {brands.map((brand, i) => {
          return (
            <Image
              className={`${styles.brandLogo} max-w-12 md:max-w-24 lg:max-w-32`}
              key={i}
              width={250}
              height={70}
              src={`/logos/${brand}.png`}
              alt={brand}
            />
          );
        })}
      </div>
    </div>
  );
};
