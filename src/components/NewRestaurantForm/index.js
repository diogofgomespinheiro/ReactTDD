import React, { useState } from "react";
import { Button, TextInput, Row } from "react-materialize";

const NewRestaurantForm = ({ onSave }) => {
  const [inputText, setInputText] = useState("");

  const handleChange = event => {
    setInputText(event.target.value);
  };

  const handleSave = () => {
    if (inputText.trim() === "") {
      return;
    }
    onSave(inputText);
  };
  return (
    <div>
      <Row>
        <TextInput
          s={12}
          label="Restaurant Name"
          type="text"
          data-test="newRestaurantName"
          onChange={handleChange}
        />
      </Row>
      <Row style={{padding: "0 0.75rem"}}>
        <Button data-test="saveNewRestaurantNameButton" onClick={handleSave}>
          Save
        </Button>
      </Row>
    </div>
  );
};

export default NewRestaurantForm;
