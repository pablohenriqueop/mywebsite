import { useState, useCallback } from "react";
import styles from "../styles/components/Menu.module.css";

import { Link } from "react-scroll";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpen(!isOpen);
    const root = document.getElementsByTagName("html")[0];
    root.setAttribute("class", isOpen === false ? "overflow-hidden" : "");
  }, [isOpen]);
  return (
    <nav
      className={`${styles.navWrapper} ${isOpen ? `${styles.menuOpened}` : ""}`}
    >
      <div className={styles.menuBackground}>
        <section className={styles.menuWrapper}>
          <nav className={styles.navMenu}>
            <ul>
              <li>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={handleOpenMenu}
                >
                  Sobre mim
                </Link>
              </li>
              <li>
                <Link
                  to="jobs"
                  spy={true}
                  smooth={true}
                  offset={-120}
                  duration={500}
                  onClick={handleOpenMenu}
                >
                  Trabalhos em destaque
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
      <a
        href=""
        className={styles.wrapperIcon}
        onClick={(event) => {
          event.preventDefault();
          handleOpenMenu();
        }}
      >
        <div></div>
      </a>
      <span className={styles.myName}>
        <span>PABLO</span> <span>HENRIQUE</span>
      </span>
    </nav>
  );
}
