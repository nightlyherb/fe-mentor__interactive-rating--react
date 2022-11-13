import React from "react";

import {
  AppModel,
  Rating,
  updateRatingOrNoop,
  submitRatingOrNoop,
} from "../@model";

import RatingSelectRadio from "./RatingSelectRadio";
import RatingSubmitButton from "./RatingSubmitButton";

import styles from "./styles.module.scss";

export default function RatingSelectCard(props: {
  model: AppModel;
  updateModel: (updateFn: (oldModel: AppModel) => AppModel) => void;
}) {
  const { model, updateModel } = props;
  const handleSelect = (selectedRating: Rating) => {
    const updateFn = (oldModel: AppModel) =>
      updateRatingOrNoop(oldModel, selectedRating);
    updateModel(updateFn);
  };

  const handleSubmit = () => {
    updateModel(submitRatingOrNoop);
  };

  return (
    <form className={styles.main}>
      <RatingSelectRadio
        selectedRating={model.rating}
        onSelect={handleSelect}
        name={"rating"}
      ></RatingSelectRadio>
      <RatingSubmitButton onSubmit={handleSubmit}></RatingSubmitButton>
    </form>
  );
}
