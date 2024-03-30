import { Route, Routes } from "react-router-dom";
import "./App.css";
import Edit from "./components/editData/Edit.js";
import Table from "./components/table/Table.js";
import Add from "./components/addData/Add.js";

function App() {
  return (
    <Routes className="App">
      <Route path="/add" element={<Add />} />
      <Route path="/" element={<Table />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}

export default App;
