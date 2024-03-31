import DataTable from "react-data-table-component";
import "./table.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function Table() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    getData();
  }, []);
  // console.log(data);

  const getData = async () => {
    let result = await fetch("/data");
    const documents = await result.json();
    setData(documents);
  };

  const handleDelete = async (id) => {
    const res = await fetch(`/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const dataDelete = await res.json();
    if (!dataDelete) {
      toast.error("Data cannot be deleted due to some errors");
      return;
    }
    getData();
    toast.success("Deleted successfully");
  };
  const columns = [
    {
      name: "Record Type",
      selector: (row) => row.record,
      sortable: true,
    },
    {
      name: "Domain",
      selector: (row) => row.domain,
      sortable: true,
    },
    {
      name: "Value",
      selector: (row) => row.value,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="btn_container">
          <Link to={"/edit/" + row._id}>
            <button className="edit-btn">Edit</button>
          </Link>
          <button className="delete-btn" onClick={() => handleDelete(row._id)}>
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="table_container">
      <h1>DNS Records</h1>
      <DataTable
        fixedHeader
        columns={columns}
        data={data}
        className="table"
      ></DataTable>
      <button className="add-btn" onClick={() => navigate("/add")}>
        Add Data
      </button>
    </div>
  );
}
