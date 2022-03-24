import { useState } from "react";
function App() {
  const [students, setStudents] = useState([
    "Shabir",
    "Butt",
    "Aome sleeping students",
  ]);
  return (
    <div className="App">
      <div className="fa fa-home">abc</div>
      <button className="btn btn-danger">DANGER BUTTON</button>
      {/* <button
        onClick={() => {
          let temp = [...students];
          temp.sort();
          setStudents(temp);
        }}
      >
        Sort
      </button>
      <ul>
        {students.map((data) => (
          <li>{data}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
