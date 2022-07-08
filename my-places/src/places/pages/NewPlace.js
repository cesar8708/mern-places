import React from "react";
import Button from "../../shared/components/FormsElements/Button";
import "./NewPlace.css";
import "../../places/components/PlaceItem.css";
import Input from "../../shared/components/FormsElements/Input";
import "../../shared/util/validators";
import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
const NewPlace = () => {
    
  return (
    <form className="place-form" onSubmit={(event) => event.preventDefault()}>
      <Input
        title="Title"
        placeholder="Example: Taj Mahal"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={() => {}}
        errorText="Please enter a valid title"
      />
      {/* <footer className="place-item__actions">
        <Button>CREATE</Button>
      </footer> */}
    </form>
  );
};

export default NewPlace;
