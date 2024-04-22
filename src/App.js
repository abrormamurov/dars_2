import { useState } from "react";

const imageName = ["./assets/image-0", "./assets/image-1", "./assets/image-2"];

function App() {
  let img = [
    "./assets/image-0.jpg",
    "./assets/image-1.jpg",
    "./assets/image-2.jpg",
    "./assets/image-3.jpg",
    "./assets/image-4.jpg",
    "./assets/image-5.jpg",
    "./assets/image-6.jpg",
  ];
  let [number, setNumber] = useState(0);

  return (
    <div>
      <img src={img[number]} width={600}></img>

      <div className="btn">
        <button
          onClick={() => {
            if (number > 0) {
              setNumber(number - 1);
            }
          }}
        >
          Back
        </button>
        <button
          onClick={() => {
            if (number < 5) {
              setNumber(number + 1);
            }
          }}
        >
          Next ;
        </button>
      </div>
    </div>
  );
}

export default App;
