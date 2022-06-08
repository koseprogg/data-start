import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "../components/Image";
import LinkCard from "../components/LinkCard";

// Separate JSX elements from the link data that is parsed through JSON.stringify
const customNames = {
  abakus: (
    <span className={styles.image}>
      <Image src={"./abakus.png"} alt="Abakus Logo" height={25} width={110} />
    </span>
  ),
  emnr: (
    <>
      EMN<span style={{ color: "rgb(230, 57, 70)" }}>R</span>
    </>
  ),
  online: (
    <span className={styles.image}>
      <Image src={"./online.svg"} alt="Online Logo" height={25} width={100} />
    </span>
  ),
  tihlde: (
    <span className={styles.image}>
      <Image src={"./tihlde.png"} alt="Tihlde Logo" height={25} width={140} />
    </span>
  ),
};

const originalLinks = [
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
    name: "emnr",
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
    name: "abakus",
    description: "Nettsiden til linjeforeningen Abakus.",
    closeColor: "white",
  },
  {
    url: "https://online.ntnu.no",
    className: styles.online,
    name: "online",
    description: "Nettsiden til linjeforeningen Online.",
    closeColor: "white",
  },
  {
    url: "https://tihlde.org",
    className: styles.tihlde,
    name: "tihlde",
    description: "Nettsiden til linjeforeningen Tihlde.",
    closeColor: "white",
  },
];

export default function Home() {
  const [links, setLinks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  function removeLink(index) {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  }

  function addLink(title, info, link) {
    setLinks([
      ...links,
      {
        url: link,
        name: title,
        description: info,
      },
    ]);
  }

  function reset() {
    setLinks(originalLinks);
  }

  useEffect(() => {
    if (
      !!localStorage.getItem("links") &&
      JSON.parse(localStorage.getItem("links")).length >= 1
    ) {
      setLinks(JSON.parse(localStorage.getItem("links")));
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(links));
    setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, [links]);

  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

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
          {links.map((metadata, key) => (
            <LinkCard
              key={key}
              darkMode={darkMode}
              {...metadata}
              name={customNames[metadata.name] ?? metadata.name}
              onClose={() => removeLink(key)}
            />
          ))}
        </div>
        <div className="Wrapper" ref={ref}>
          {!isMenuOpen && (
            <button
              id="addButton"
              className={`${styles.card} ${styles.addButton}`}
              onClick={() => {
                setIsMenuOpen((oldState) => !oldState);
              }}
            >
              <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
              ></link>
              <span id={styles.pluss} className="material-icons">
                add
              </span>
              <h3>Legg til link</h3>
            </button>
          )}
          {isMenuOpen && (
            <div id="form" className={`${styles.card} ${styles.newLinkForm}`}>
              <h3>Title:</h3>
              <input id="title" size="35"></input>
              <h3>Info:</h3>
              <input id="info" size="35"></input>
              <h3>Link:</h3>
              <input id="link" size="35"></input>
              <button
                onClick={() => {
                  setIsMenuOpen((oldState) => !oldState);
                  console.log(document.getElementById("title").value);
                  addLink(
                    document.getElementById("title").value,
                    document.getElementById("info").value,
                    document.getElementById("link").value
                  );
                  reset();
                }}
                id={styles.newLinkConfirm}
              >
                ADD LINK
              </button>
            </div>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/koseprogg/data-start"
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
