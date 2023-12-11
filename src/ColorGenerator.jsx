// React
import { useState } from "react";
// Values.js
import Values from "values.js";
// Components
import ColorBlock from "./ColorBlock";

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
    } catch (err) {
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
        {colors.map((specificColor, index) => {
          const { weight, hex, type } = specificColor;
          return (
            <ColorBlock
              procentage={weight}
              hexValue={hex}
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              type={type}
            />
          );
        })}
      </div>
    </>
  );
};

export default ColorGenerator;
