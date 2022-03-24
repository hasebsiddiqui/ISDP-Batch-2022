import { useState } from "react";

function App() {
  const [arr, setArr] = useState(["ABC", "XYZ", "RTD"]);
  return (
    <div className="App">
      <ul>
        {arr.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
      {/* <ul>
        {persons.map((person, index) => (
          <li key={index}>{person}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
