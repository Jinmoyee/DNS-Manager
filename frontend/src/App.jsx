import { Route, Routes } from "react-router-dom";
import Table from "./components/table/Table.jsx";
import Add from "./components/addData/Add.jsx";
import Edit from "./components/editData/Edit.jsx";

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
