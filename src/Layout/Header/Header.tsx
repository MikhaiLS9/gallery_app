import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import sunSvg from "../../../public/sun.svg";
import blackSunSvg from "../../../public/blackSun.svg";
import logoSvg from "../../../public/Logo.svg";
import Button from "../../components/Button/Button";
import React from "react";

function Header(): JSX.Element {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={styles.header}>
      <img className={styles.sun_svg} src={logoSvg} alt="logo" />
      <Button className={styles.button} onClick={toggleTheme}>
        {theme && <img src={sunSvg} alt="sun" />}
        <img src={blackSunSvg} alt="sun" />
      </Button>
    </header>
  );
}

const MemoizedHeader = React.memo(Header);

export default MemoizedHeader;
