import React from 'react';
import RatingItem from './RatingItem';

function RatingBox(props) {
  return (
    <div className="rating-box">
      <RatingItem name="one" value={1} onClick={props.onRatingClick} />
      <RatingItem name="two" value={2} onClick={props.onRatingClick} />
      <RatingItem name="three" value={3} onClick={props.onRatingClick} />
      <RatingItem name="four" value={4} onClick={props.onRatingClick} />
      <RatingItem name="five" value={5} onClick={props.onRatingClick} />
    </div>
  );
}

export default RatingBox;
