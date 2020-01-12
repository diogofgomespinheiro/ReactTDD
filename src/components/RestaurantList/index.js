import React, { useState } from "react";
import NewRestaurantForm from "../NewRestaurantForm";
import { Button, Collection, CollectionItem } from "react-materialize";

const RestaurantList = () => {
  const [restaurantNames, setRestaurantNames] = useState([]);
  const [showNewRestaurantForm, setShowNewRestaurantForm] = useState(false);

  const handleAddRestaurant = newRestaurantName => {
    setRestaurantNames([...restaurantNames, newRestaurantName]);
    handleShowNewRestaurantForm();
  };

  const handleShowNewRestaurantForm = () => {
    setShowNewRestaurantForm(oldState => !oldState);
  };

  return (
    <div>
      <Button
        data-test="addRestaurantButton"
        onClick={handleShowNewRestaurantForm}
      >
        Add Restaurant
      </Button>
      {showNewRestaurantForm && (
        <NewRestaurantForm onSave={handleAddRestaurant} />
      )}
      <Collection header="Restaurants">
        {restaurantNames.length === 0 ? (
          <CollectionItem key="no-restaurant">Not added yet</CollectionItem>
        ) : (
          restaurantNames.map(restaurantName => (
            <CollectionItem key={restaurantName}>
              {restaurantName}
            </CollectionItem>
          ))
        )}
      </Collection>
    </div>
  );
};

export default RestaurantList;
