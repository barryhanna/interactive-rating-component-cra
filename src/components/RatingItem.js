import React from 'react';

function RatingItem({ name, value, onClick }) {
  return (
    <div className="rating-item">
      <input id={name} type="radio" value={value} name="rating" />
      <label
        className="rating-number circular-bg"
        htmlFor={name}
        onClick={onClick}
      >
        {value}
      </label>
    </div>
  );
}

export default RatingItem;
