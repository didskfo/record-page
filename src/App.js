import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Photo from "./Pages/Photo/Photo";
import Book from "./Pages/Book/Book";
import Todo from "./Pages/Todo/Todo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="Photo" element={<Photo />} />
          <Route path="Book" element={<Book />} />
          <Route path="Todo" element={<Todo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
