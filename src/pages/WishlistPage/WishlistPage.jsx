import React from "react";

const WishlistPage = (props) => {
  const { wishlist, removeFromWishlist } = props;
  return (
    <div className="wishlist-page">
      <h2>Wishlist</h2>
      <ul>
        {wishlist.length > 0 ? (
          wishlist.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromWishlist(item.id)}>
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default WishlistPage;
