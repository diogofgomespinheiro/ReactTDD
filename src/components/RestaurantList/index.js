import React, { useState } from "react";
import NewRestaurantForm from "../NewRestaurantForm";

const RestaurantList = () => {
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

  const handleAddRestaurant = newRestaurantName => {
    setRestaurantNames([...restaurantNames, newRestaurantName]);
    handleShowNewRestaurantForm();
  };

  const handleShowNewRestaurantForm = () => {
    setShowNewRestaurantForm(oldState => !oldState);
  }

  return (
    <div>
      <button
        data-test="addRestaurantButton"
        onClick={handleShowNewRestaurantForm}
      >
        Add Restaurant
      </button>
      {showNewRestaurantForm && (
        <NewRestaurantForm onSave={handleAddRestaurant} />
      )}
      <ul>
        {restaurantNames.map(restaurantName => (
          <li key={restaurantName}>{restaurantName}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
