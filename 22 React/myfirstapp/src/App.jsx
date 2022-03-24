import { Button } from "react-bootstrap";
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Button
        variant="danger"
        size="lg"
        disabled={loading}
        onClick={() => {
          setLoading(!loading);
        }}
      >
        ASD
      </Button>
    </div>
  );
}

export default App;
