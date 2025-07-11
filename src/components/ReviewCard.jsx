import { FaStar } from 'react-icons/fa';

export default function ReviewCard({ review }) {
  const { name, date, comment, rating, response, photo } = review;

  return (
    <div className="review-card">
      <div className="review-header">
        
        <div className="review-info">
          <h3>{name}</h3>
          <p className="review-date">{date}</p>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                color={i < rating ? '#FFC107' : '#ccc'}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="review-comment">{comment}</p>

      {response ? (
        <div className="review-response">
          <strong>Tu respuesta:</strong>
          <p>{response}</p>
        </div>
      ) : (
        <button className="reply-button">Responder</button>
      )}
    </div>
  );
}