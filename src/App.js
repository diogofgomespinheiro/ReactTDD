import React, { useState } from "react";
import RestaurantList from "./components/RestaurantList";

const App = () => {
  const [name, setName] = useState("viewers");
  return (
    <div>
      <RestaurantList />
    </div>
  );
}

export default App;