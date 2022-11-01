import React from "react";
import styles from "./styles.module.scss";
export default function Attribution() {
  return (
    <div className={styles.attribution}>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/nightlyherb">Nightlyherb</a>.
    </div>
  );
}
