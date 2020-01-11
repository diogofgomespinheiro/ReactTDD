import React, { useState } from 'react';

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
      <input type="text" data-test="newRestaurantName" onChange={handleChange}/>
      <button data-test="saveNewRestaurantNameButton" onClick={handleSave}>Save</button>
    </div>
  )
}

export default NewRestaurantForm;
