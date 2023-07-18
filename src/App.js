import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Photo from "./Pages/Photo/Photo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="Photo" element={<Photo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
