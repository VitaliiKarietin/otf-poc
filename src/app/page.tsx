import Image from "next/image";
import styles from "./page.module.css";
import {
  Carousel,
  About,
  StudiosCatalogue,
  Catalogue,
  News
} from "./containers";

export default function Home() {
  return (
    <main className={styles.topShadow}>
      <Carousel />
      <About />
      <StudiosCatalogue />
      <Catalogue />
      <News />
    </main>
  );
}
