import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

const ListingsContainer = ({ searchTxt }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then(setListings);
  }, []);

  const handleDeleteListing = (_id) => {
    fetch(`http://localhost:6001/listings/${_id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedListings = listings.filter((listing) => listing.id !== _id);
      setListings(updatedListings);
    });
  };

  const allListings = listings
    .filter((listing) =>
      listing.description.toLowerCase().includes(searchTxt.toLowerCase())
    )
    .map((listing) => (
      <ListingCard
        key={listing.id}
        listing={listing}
        onDeleteListing={handleDeleteListing}
      />
    ));

  return (
    <main>
      <ul className="cards">{allListings}</ul>
    </main>
  );
};

export default ListingsContainer;
