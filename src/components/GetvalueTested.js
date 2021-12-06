import { useState } from "react";

const GetvalueTested = () => {
  const [changedText, setChangedText] = useState(false);

  const updateText = () => {
    setChangedText(true);
  };
  return (
    <>
      <h1>Test value</h1>
      <p>original text</p>
      {changedText && <p>updated text</p>}
      <button onClick={updateText}>click here</button>
    </>
  );
};

export default GetvalueTested;
