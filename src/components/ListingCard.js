import { useState } from "react";

const ListingCard = ({ listing, onDeleteListing }) => {
  const { id, description, image, location } = listing;
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => setFavorite((prev) => !prev);

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            className="emoji-button favorite active"
            onClick={toggleFavorite}
          >
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={toggleFavorite}>
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button
          className="emoji-button delete"
          onClick={() => onDeleteListing(id)}
        >
          🗑
        </button>
      </div>
    </li>
  );
};

export default ListingCard;
