function Array() {
    const colors = ["Red", "Yellow", "Green", "Blue", "Orange", "Grey"];
    const colorList = colors.map((color, index) => <li key={index}>{color}</li>);
  
    return (
      <>
        <ul>{colorList}</ul>
      </>
    );
  }
  
  export default Array;