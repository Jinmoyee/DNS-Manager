import React, { useEffect, useState } from "react";
import "../addData/add.css";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState();
  const paramsId = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(`/prevData/${paramsId.id}`);
    const data = await res.json();
    setFormData(data);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/edit/${paramsId.id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    console.log(data);
    toast.success("Edited successfully!");
    if (data.success === false) {
      toast.error("Unable to edit data!");
      return;
    }
    navigate("/");
  };

  return (
    <div className="add_container">
      <h2>Edit Data</h2>
      <div className="input_container">
        <input
          type="text"
          placeholder="Record Type"
          value={formData?.record}
          onChange={handleChange}
          id="record"
        />
        <input
          type="text"
          placeholder="Enter Domain"
          onChange={handleChange}
          id="domain"
          value={formData?.domain}
        />
        <input
          type="text"
          placeholder="Enter the value"
          onChange={handleChange}
          id="value"
          value={formData?.value}
        />
        <div className="btn">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
