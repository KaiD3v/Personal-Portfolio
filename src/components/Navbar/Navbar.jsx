import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar_container}>
      <NavLink to={"/"} className={styles.brand}>
        Kai
        <span>D3v</span>
      </NavLink>
      <ul className={styles.links_list}> 
        <li>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to={'/projects'}>Projetos</NavLink>
          
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? styles.active : '')} to={"/about"}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;