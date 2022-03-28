import React from 'react';

export default function RatingContainer() {
  return (
    <>
      <div class="rating-container">
        <img src="/images/icon-star.svg" />
        <h3>How did we do?</h3>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div class="rating-box">
          <div className="rating-item">
            <label class="rating-number" for="one">
              1
            </label>
            <input id="one" type="radio" value="1" name="rating" />
          </div>
          <div className="rating-item">
            <label class="rating-number" for="two">
              2
            </label>
            <input id="two" type="radio" value="2" name="rating" />
          </div>
          <div className="rating-item">
            <label class="rating-number" for="three">
              3
            </label>
            <input id="three" type="radio" value="3" name="rating" />
          </div>
          <div className="rating-item">
            <label class="rating-number" for="four">
              4
            </label>
            <input id="four" type="radio" value="4" name="rating" />
          </div>
          <div className="rating-item">
            <label class="rating-number" for="five">
              5
            </label>
            <input id="five" type="radio" value="5" name="rating" />
          </div>
        </div>

        <button>Submit</button>
      </div>
    </>
  );
}
