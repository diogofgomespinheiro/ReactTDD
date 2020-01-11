import React from "react";
import { shallow } from "enzyme";
import NewRestaurantForm from "../../src/components/NewRestaurantForm";

describe("NewRestaurantForm", () => {
  describe("clicking the save button", () => {
    it("should call onSave Handler", () => {
      const saveHandler = jest.fn();

      const wrapper = shallow(<NewRestaurantForm onSave={saveHandler} />);

      wrapper
        .find("[data-test='newRestaurantName']")
        .simulate("change", { target: { value: "Sushi Place" } });

      wrapper
        .find("[data-test='saveNewRestaurantNameButton']")
        .simulate("click");

      expect(saveHandler).toHaveBeenCalledWith("Sushi Place");
    });
  });
});
