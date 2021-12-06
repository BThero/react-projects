export interface ReviewData {
  name: string,
  activity: string,
  review: string,
  imgUrl: string,
}

export interface ReviewProps {
  data: ReviewData,
  onClickNext: () => void,
  onClickPrev: () => void,
  onClickRandom: () => void
}