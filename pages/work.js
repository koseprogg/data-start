import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data-start jobbutlysningsportaler</title>
        <meta
          name="description"
          content="Startsiden for IT-studenter på Gløshaugen"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#121212"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>
          <Link href="/">&#8592; Tilbake</Link>
        </h2>
        <div className={styles.grid}>
          <a
            href="https://bindeleddet.no/jobs"
            className={`${styles.card} ${styles.bindeleddet}`}
          >
            <h2>Bindeleddet</h2>
            <p>Profilerer seg mot realfag- og indøk-studenter.</p>
          </a>

          <a
            href="https://www.teknologiporten.no/nb/stillingsannonser/"
            className={`${styles.card} ${styles.teknologiporten}`}
          >
            <h2>Teknologiporten</h2>
            <p>Profilerer seg mot alle typer realfag-studenter.</p>
          </a>

          <a
            href="https://www.poption.com/user/postings/"
            className={`${styles.card} ${styles.poption}`}
          >
            <h2>Poption</h2>
            <p>
              (Vanligvis) forenklede søknadsprosesser, profilerer seg mot alle
              typer studenter.
            </p>
          </a>

          <a
            href="https://abakus.no/joblistings"
            className={`${styles.card} ${styles.abakus}`}
          >
            <h2>Abakus jobbannonser</h2>
            <p>Stillinger for it-studenter, mye likt som hos Online</p>
          </a>

          <a
            href="https://online.ntnu.no/career"
            className={`${styles.card} ${styles.online}`}
          >
            <h2>Online jobbannonser</h2>
            <p>Stillinger for it-studenter, mye likt som hos Abakus</p>
          </a>

          <a
            href="https://tihlde.org/karriere/"
            className={`${styles.card} ${styles.tihlde}`}
          >
            <h2>Tihlde jobbannonser</h2>
            <p>Stillinger for it-studenter</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Foreslå endringer på{" "}
          <span className={styles.logo}>
            <Image src="/github.svg" alt="Vercel Logo" width={16} height={16} />{" "}
          </span>
        </a>
      </footer>
    </div>
  );
}
