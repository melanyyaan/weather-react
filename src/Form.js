import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <form className="search">
        <input
          className="search_bar"
          type="text"
          name="city"
          placeholder="Enter a city..."
          autoFocus
        />
        <span className="buttons">
          <input
            className="btn btn-dark search_btn"
            type="submit"
            value="Search"
          />
        </span>
      </form>
    </div>
  );
}
