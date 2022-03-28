import React from 'react';

export default function RatingContainer() {
  return (
    <>
      <div class="rating-container">
        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div class="rating-box">
          <input type="radio" value="1" />
          <input type="radio" value="2" />
          <input type="radio" value="3" />
          <input type="radio" value="4" />
          <input type="radio" value="5" />
        </div>

        <button>Submit</button>
      </div>
    </>
  );
}
