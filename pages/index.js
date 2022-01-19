import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "../components/Image";
import LinkCard from "../components/LinkCard";

const links = [
  {
    url: "https://ntnu.blackboard.com/webapps/portal/execute/tabs/tabAction?tab_tab_group_id=_70_1",
    className: styles.bb,
    name: "Blackboard",
    description:
      "Gå rett til blackboard og få oversikt over kunngjøringer i alle emner, slik som i gamle dager!",
    closeColor: "white",
  },
  {
    url: "https://innsida.ntnu.no/start#/feed/",
    className: styles.innsida,
    name: "Innsida",
    description:
      "Se kunngjøringer fra institutt / fakultet / NTNU, utlysning av assistentstillinger, og lignende.",
    closeColor: "white",
  },
  {
    url: "http://mail.ntnu.no/",
    className: styles.mail,
    name: "NTNU epost",
    description: "Logg inn på epost-kontoen din hos NTNU.",
    closeColor: "white",
  },
  {
    url: "https://tp.uio.no/ntnu/rombestilling/",
    name: "TP Rombestilling",
    description:
      "Bestill grupperom og lignende, og se timeplan for de forskjellige rommene på hele NTNU.",
  },
  {
    url: "https://use.mazemap.com/#v=1&config=ntnu&zlevel=1&center=10.404042,63.417890&zoom=14.6&campusid=1&utm_medium=longurl",
    className: styles.mazemap,
    name: "MazeMap",
    description: "Få oversikt over campus Gløshaugen og søk opp rom.",
    closeColor: "white",
  },
  {
    url: "/work",
    name: "Jobb for IT-studenter",
    description:
      "Finn en oversikt over de mest populære offentlige jobbutlysningsportalene for IT-studenter på Gløshaugen.",
    internal: true,
  },
  {
    url: "https://grades.no",
    className: styles.grades,
    name: "Grades.no",
    description: "Se karakterstatistikk på emner.",
  },
  {
    url: "https://emnr.no",
    className: styles.emnr,
    name: (
      <>
        EMN<span style={{ color: "rgb(230, 57, 70)" }}>R</span>
      </>
    ),
    description: "Se verifiserte vurderinger av emner fra medstudenter.",
    closeColor: "white",
  },
  {
    url: "https://www.wikipendium.no",
    name: "Wikipendium",
    description:
      "Gratis nettbaserte kompendium skrevet av medstudenter i wikiformat.",
  },
  {
    url: "https://dvikan.no/gamle-ntnu-eksamener/",
    name: "Dvikan gamle eksamener",
    description: "Finn eldre eksamener på dvikan.no.",
  },
  {
    url: "https://fsweb.no/studentweb/login.jsf?inst=FSNTNU",
    name: "Studentweb",
    description:
      "Meld deg opp i emner, sjekk eksamensdatoer og se vurderinger.",
  },
  {
    url: "https://app.vitnemalsportalen.no/vp/login",
    className: styles.vitnemal,
    name: "Vitnemålsportalen",
    description:
      "Hent signert karakterutskrift, med mulighet for å dele via epost til arbeidsgiver.",
  },
  {
    url: "https://abakus.no",
    className: styles.abakus,
    name: (
      <span className={styles.image}>
        <Image src={"./abakus.png"} alt="Abakus Logo" height={25} width={110} />
      </span>
    ),
    description: "Nettsiden til linjeforeningen Abakus.",
    closeColor: "white",
  },
  {
    url: "https://online.ntnu.no",
    className: styles.online,
    name: (
      <span className={styles.image}>
        <Image src={"./online.svg"} alt="Online Logo" height={25} width={100} />
      </span>
    ),
    description: "Nettsiden til linjeforeningen Online.",
    closeColor: "white",
  },
  {
    url: "https://tihlde.org",
    className: styles.tihlde,
    name: (
      <span className={styles.image}>
        <Image src={"./tihlde.png"} alt="Tihlde Logo" height={25} width={140} />
      </span>
    ),
    description: "Nettsiden til linjeforeningen Tihlde.",
    closeColor: "white",
  },
];

function generateDefaultConfig() {
  const defaultConfig = [];
  for (let index = 0; index < 15; index++) {
    defaultConfig.push(true);
  }
  return defaultConfig;
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeLinks, setActiveLinks] = useState([]);

  function closeLink(index) {
    const activeLinksCopy = [...activeLinks];
    activeLinksCopy[index] = false;
    setActiveLinks(activeLinksCopy);
  }

  function reset() {
    setActiveLinks(generateDefaultConfig());
  }

  useEffect(() => {
    if (
      !!localStorage.getItem("activeLinks") &&
      JSON.parse(localStorage.getItem("activeLinks")).length >= 15
    ) {
      setActiveLinks(JSON.parse(localStorage.getItem("activeLinks")));
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("activeLinks", JSON.stringify(activeLinks));
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [activeLinks]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Data-start</title>
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
        <div className={styles.grid}>
          {links.map((metadata, key) =>
            activeLinks[key] ? (
              <LinkCard
                key={key}
                darkMode={darkMode}
                {...metadata}
                onClose={() => closeLink(key)}
              />
            ) : (
              <React.Fragment key={key}></React.Fragment>
            )
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/Magssch/data-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          Foreslå endringer på{" "}
          <span className={styles.logo}>
            <Image
              src={"./github.svg"}
              alt="Github Logo"
              width={16}
              height={16}
            />{" "}
          </span>
        </a>
        <button
          className={`${styles.button} ${styles.reset}`}
          onClick={(e) => {
            reset();
          }}
        >
          <span
            className={styles.image}
            style={
              darkMode
                ? {
                    filter: "brightness(0) invert(1)",
                  }
                : {}
            }
          >
            <Image
              src={"./replay.svg"}
              alt="Tilbakestill"
              height={48}
              width={48}
            />
          </span>
        </button>
      </footer>
    </div>
  );
}
