import { useEffect, useState } from "react";
function App() {
  const [message, setMessage] = useState("Loading...");
  useEffect(() => {
    fetch("https://y23-mern-render-backend-1-yxrk.onrender.com/api/hello")
      //  fetch("http://localhost:8080/api/hello")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error: " + err.message));
}, []);
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
    </div>
); }
export default App;