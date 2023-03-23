import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function WebIcon() {
  return (
    <div className={styles["web-icon"]}>
      <a href="#" className={styles["left-align"]}>
        <img src="/chef-hat.png" className={styles.image} />
        <p>Chef's Delight</p>
      </a>
    </div>
  );
}
