import styles from "@/styles/Home.module.css";
import NavItem from "./items/nav-item";
import WebIcon from "./icon/icon";

export default function Navbar({ itemsArray, websiteName }) {
  return (
    <>
      <div className={styles.navigation}>
        <div className={styles["icon-container"]}>
          <WebIcon />
        </div>
        <div className={styles["navigation-items"]}>
          <NavItem />
          <NavItem />
        </div>
        <div className={styles["preferences-container"]}>Placeholder</div>
      </div>
    </>
  );
}
