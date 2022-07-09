import React, { StrictMode, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

// CSS
import "./styles.css";

// Values.js
import Values from "values.js";

// ColorBlock
import { ColorBlock } from "./ColorBlock";

const MainApp = () => {
  return <ColorGenerator></ColorGenerator>;
};

const ColorGenerator = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState(new Values("#28a9e0").all(10));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const valueColor = new Values(color);
      const newColors = valueColor.all(10);
      setColors(newColors);
      console.log(newColors);
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className='title-container'>
        <h1>Color Generator</h1>
        <form
          action='#'
          className='form-container'
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type='text'
            id='input'
            placeholder='#28a9e0'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ borderColor: error ? "red" : null }}
          />
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
      <div className='colors-container'>
        {colors.map((color, index) => {
          const { weight, hex, type } = color;
          return (
            <ColorBlock
              procentage={weight}
              hexValue={hex}
              key={index}
              type={type}
            ></ColorBlock>
          );
        })}
      </div>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <MainApp></MainApp>
  </StrictMode>
);
