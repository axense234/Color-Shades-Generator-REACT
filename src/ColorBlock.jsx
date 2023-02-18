// React
import React, { useState } from "react";

const ColorBlock = ({ procentage, hexValue, type }) => {
  const [showCopyClipboard, setShowCopyClipboard] = useState(false);

  return (
    <div
      className='colorblock'
      style={{
        backgroundColor: `#${hexValue}`,
        color: type === "shade" ? "white" : "black",
      }}
      onClick={() => {
        // eslint-disable-next-line no-undef
        navigator.clipboard.writeText(hexValue);
        setShowCopyClipboard(true);
        setTimeout(() => {
          setShowCopyClipboard(false);
        }, 1000);
      }}
    >
      <p id='procentage'>{procentage}%</p>
      <p id='hex-value'>#{hexValue}</p>
      {showCopyClipboard && <p id='show-copy'>COPIED TO CLIPBOARD</p>}
    </div>
  );
};

export default ColorBlock;
