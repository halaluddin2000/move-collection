export type TReview = {
  email: string;
  rating: number;
  comment: string;
};

export type TMovie = {
  title: string;
  description: string;
  releaseDate: string;
  genre: string;
  reviews: [TReview];
  isDeleted: boolean;
  viewCount: number;
  slug: string;
};
