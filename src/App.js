import { useState } from "react";

const imageName = ["./assets/image-0", "./assets/image-1", "./assets/image-2"];

function App() {
  const [counter, setCounter] = useState(1);

  const back = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(imageName.length - 1);
    }
  };
  const next = () => {
    if (counter < imageName.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };
  return (
    <div>
      <img src={`./assets/image-${counter}.jpg`} alt="" width={400} />
      <button onClick={() => back}>Back</button>
      <button onClick={() => next}>Naxt</button>
    </div>
  );
}

export default App;
