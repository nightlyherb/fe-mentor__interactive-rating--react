import React from "react";
import { Rating } from "../@model";
import styles from "./styles.module.scss";

export default function RatingSelectCard(props: {
  selectedRating: Rating | null;
  onSelect: (selectedRating: Rating) => void;
  name: string;
}) {
  const { selectedRating, onSelect, name } = props;
  const allRatings = [1, 2, 3, 4, 5] as Rating[];
  return (
    <div className={styles.mainContainer}>
      {allRatings.map((i) => {
        return (
          <RatingRadioButton
            key={i}
            isSelected={i === selectedRating}
            onSelect={onSelect}
            name={name}
            rating={i}
          />
        );
      })}
    </div>
  );
}

function RatingRadioButton(props: {
  isSelected: boolean;
  onSelect: (rating: Rating) => void;
  name: string;
  rating: Rating;
}) {
  const { isSelected, onSelect, name, rating } = props;
  return (
    <label
      htmlFor={`${name}-${rating}`}
      className={`${styles.radioLabel} ${
        isSelected && styles.selectedRadioLabel
      }`}
    >
      <input
        type="radio"
        name={name}
        id={`${name}-${rating}`}
        className={styles.radioInput}
        checked={isSelected}
        onChange={() => {
          onSelect(rating);
        }}
      />
      {rating}
    </label>
  );
}
