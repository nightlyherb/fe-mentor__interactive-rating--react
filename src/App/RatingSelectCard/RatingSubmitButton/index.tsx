import React from "react";
import styles from "./styles.module.scss";

export default function RatingSubmitButton(props: { onSubmit: () => void }) {
  return (
    <input
      className={styles.submitButton}
      type="submit"
      value="Submit"
      onClick={props.onSubmit}
    />
  );
}
