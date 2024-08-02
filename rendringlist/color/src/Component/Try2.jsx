






import React, { useState } from 'react';


const colors = ['red', 'green', 'yellow', 'orange', 'black', 'blue'];

function Try() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const handlePreview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + colors.length) % colors.length);
  };

  return (
    <div className="App">
      <div className="colorbox" style={{ backgroundColor: colors[currentIndex] }}>
        <p>Color Box</p>
      </div>
      <div className="buttons">
        <button onClick={handlePreview}>Preview</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Try;