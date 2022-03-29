import RatingContainer from './components/RatingContainer';
import ThankYou from './components/ThankYou';
import './App.css';
import { useState } from 'react';

function App() {
  const [ratingGiven, setRatingGiven] = useState(false);
  const [rating, setRating] = useState(0);

  const onRatingClick = (e) => {
    const { textContent } = e.target;
    setRating(Number(textContent));
  };

  const onRatingSubmitted = () => {
    setRatingGiven(true);
  };

  return (
    <div className="App">
      {!ratingGiven && (
        <RatingContainer
          rating
          onRatingClick={onRatingClick}
          onRatingSubmitted={onRatingSubmitted}
        />
      )}
      {ratingGiven && <ThankYou rating={rating} />}
    </div>
  );
}

export default App;
