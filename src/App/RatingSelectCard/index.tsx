import React from "react";
import { Rating } from "../@model";
import styles from "./styles.module.scss";

export default function RatingSelectCard(props: {
  selectedRating: Rating | null;
  name: string;
}) {
  return (
    <div className={styles.mainContainer}>
      <RatingRadioButton isSelected={false} name={props.name} rating={1} />
      <RatingRadioButton isSelected={false} name={props.name} rating={2} />
      <RatingRadioButton isSelected={false} name={props.name} rating={3} />
      <RatingRadioButton isSelected={false} name={props.name} rating={4} />
      <RatingRadioButton isSelected={false} name={props.name} rating={5} />
    </div>
  );
}

function RatingRadioButton(props: {
  isSelected: boolean;
  name: string;
  rating: Rating;
}) {
  return (
    <label
      htmlFor={`${props.name}-${props.rating}`}
      className={styles.radioLabel}
    >
      <input
        type="radio"
        name={props.name}
        id={`${props.name}-${props.rating}`}
        className={styles.radioInput}
      />
      {props.rating}
    </label>
  );
}
