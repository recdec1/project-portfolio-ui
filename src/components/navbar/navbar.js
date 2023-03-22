import styles from "@/styles/Home.module.css";
import NavItem from "./items/nav-item";
import WebIcon from "./icon/icon";

export default function Navbar(itemsArray) {
  return (
    <>
      <div className={styles.navigation}>
        <WebIcon />
        <NavItem />
        <NavItem />
      </div>
    </>
  );
}
