import React, { useCallback, useReducer } from "react";
import Button from "../../shared/components/FormsElements/Button";
import "./NewPlace.css";
import "../../places/components/PlaceItem.css";
import Input from "../../shared/components/FormsElements/Input";
import "../../shared/util/validators";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
      
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
      
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };

    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
      otro: {
        value: "",
        isValid: false,
      }
    },
    isValid: false,
  });

  const InputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const submitInputHandler = (event)=>{
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={submitInputHandler}>
      <Input
        id="title"
        title="Title"
        placeholder="Example: Taj Mahal"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={InputHandler}
        errorText="Please enter a valid title"
      />
      <Input
        id="description"
        title="Description"
        placeholder="Example: Este es el taj Mahal, una gran tumba"
        element="textarea"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={InputHandler}
        errorText="Please enter at lest 5 characters"
      />
      <Input
        id="address"
        title="address"
        placeholder="Example: calle 30 2bB 04"
        element="input"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={InputHandler}
        errorText="Please enter a valid address"
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
