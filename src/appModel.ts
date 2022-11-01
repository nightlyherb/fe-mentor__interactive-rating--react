type Rating = 1 | 2 | 3 | 4 | 5;

export type AppModel =
  | { stage: "select rating"; rating: Rating | null }
  | { stage: "finished"; rating: Rating };

export const updateRatingOrNoop = (
  oldModel: AppModel,
  rating: Rating
): AppModel => {
  switch (oldModel.stage) {
    case "select rating":
      return { ...oldModel, rating };
    case "finished": // Noop
      return oldModel;
  }
};

export const submitRatingOrNoop = (oldModel: AppModel): AppModel => {
  switch (oldModel.stage) {
    case "select rating":
      if (oldModel.rating === null) {
        // Cannot proceed without a rating, so noop
        return oldModel;
      }
      return {
        ...oldModel,
        rating: oldModel.rating, // Needed to make the type checker happy
        stage: "finished",
      };
    case "finished":
      // Already finished rating, so noop
      return oldModel;
  }
};
