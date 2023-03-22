import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function WebIcon() {
  return (
    <>
      <div className={styles[("centre-align", "web-icon")]}>
        {/* <p>Icon</p> */}
        <img src="/chef-hat.png" className={styles.image} />
      </div>
    </>
  );
}
