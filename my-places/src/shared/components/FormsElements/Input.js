import React, { useReducer } from "react";
import {validate} from "../../util/validators";
import "./Input.css";

const inputReducer = (state, action) => {
    
    switch (action.type) {
    
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: action.isValid
      };
    case "FOCUS":
        return {
            ...state,
            isFocused: true
        };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isFocused: false
  });

  const changeHandler = (event) => {
    let actionObject = {
      type: "CHANGE",
      val: event.target.value,
      isValid:validate(event.target.value , props.validators)
    };
    dispatch(actionObject);
  };
  const focusHandler=()=>{
    let actionObject ={type:'FOCUS'};
    dispatch(actionObject);
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        validators={props.validators}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={focusHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        placeholder={props.placeholder}
        validators={props.validators}
        onChange={changeHandler}
        onBlur={focusHandler}
        value={inputState.value}
      />
    );

  return (
    <div className={`form-control ${!inputState.isValid && inputState.isFocused && 'form-control--invalid'}`}>
      <label htmlFor={props.id}>{props.title}</label>
      {element}
      {!inputState.isValid && inputState.isFocused && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
