import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = ({isActive, setMenuState}) => {

  return (
    <nav className={styles.navbar_container}>
      <NavLink to={"/"} className={styles.brand}>
        Kai
        <span>D3v</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li className={styles.list}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/skills"}
          >
            Skills
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/projects"}
          >
            Projetos
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to={"/about"}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <button className={styles.menu_btn} onClick={() => setMenuState(!isActive)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
