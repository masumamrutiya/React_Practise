const styles = {
    App: {
      textAlign: "center",
      padding: "20px",
    },
    colorBox: {
      width: "400px",
      height: "400px",
      margin: "20px auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "whitesmoke",
      fontSize: "1.2rem",
      borderRadius: "10px",
    },
    buttons: {
        height:"80px",
      
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      cursor: "pointer",
    },
  };
  




import React, { useState } from 'react';

const colors = ['red', 'green', 'yellow', 'orange', 'black', 'blue'];

function Try() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((pIndex) => (pIndex + 1) % colors.length);
  };

  const handlePreview = () => {
    setCurrentIndex((pIndex) => (pIndex - 1 + colors.length) % colors.length);
  };

  return (
    <div style={styles.App}>
      <div style={{ ...styles.colorBox, backgroundColor: colors[currentIndex] }}>
        <p>Color Box</p>
      </div>
      <div style={styles.buttons}>
        <button style={styles.button} onClick={handlePreview}>Preview</button>
        <button style={styles.button} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Try;
