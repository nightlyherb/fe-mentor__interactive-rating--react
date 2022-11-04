import React from "react";
import { AppModel, Rating, updateRatingOrNoop } from "../@model";
import RatingSelectRadio from "./RatingSelectRadio";

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

  return (
    <form>
      <RatingSelectRadio
        selectedRating={model.rating}
        onSelect={handleSelect}
        name={"rating"}
      ></RatingSelectRadio>
    </form>
  );
}
