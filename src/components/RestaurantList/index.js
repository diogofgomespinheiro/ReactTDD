import React, { useState } from "react";
import NewRestaurantForm from "../NewRestaurantForm";

const RestaurantList = () => {
  const [restaurantNames, setRestaurantNames] = useState([]);

  const handleAddRestaurant = (newRestaurantName) => {
    setRestaurantNames([...restaurantNames, newRestaurantName]); 
  }

  return (
    <div>
      <button data-test="addRestaurantButton">Add Restaurant</button>
      <NewRestaurantForm onSave={handleAddRestaurant}/>
      <ul>
       {restaurantNames.map(restaurantName => (
          <li key={restaurantName}>{restaurantName}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
