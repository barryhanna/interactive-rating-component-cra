import React from 'react';

function ThankYou({ rating }) {
  return (
    <div className="thank-you">
      <img src="/images/illustration-thank-you.svg" alt="Thank you" />
      <p className="selection-notice">You selected {rating} out of 5</p>
      <h3>Thank you!</h3>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&apos;t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
