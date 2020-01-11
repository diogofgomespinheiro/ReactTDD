import React, { useState } from 'react';
import { Button, TextInput } from "react-materialize";

const NewRestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = event => {
    setInputText(event.target.value);
  }

  const handleSave = () => {
    onSave(inputText);
  }
  return (
    <div>
      <TextInput label="Restaurant Name" type="text" data-test="newRestaurantName" onChange={handleChange}/>
      <Button data-test="saveNewRestaurantNameButton" onClick={handleSave}>Save</Button>
    </div>
  )
}

export default NewRestaurantForm;
