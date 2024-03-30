import React, { useState } from "react";
import "./add.css";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Add = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.id]: e.target.value });
  };
  const handleSumbit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:1000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    toast.success("Added successfully!");
    if (data.success === false) {
      toast.error("Unable to add data!");
      return;
    }
    navigate("/");
  };
  return (
    <div className="add_container">
      <h2>Add Data</h2>
      <div className="input_container">
        <input
          type="text"
          minLength="5"
          placeholder="Record Type"
          id="record"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Domain"
          id="domain"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter the value"
          onChange={handleChange}
          id="value"
        />
        <div className="btn">
          <button onClick={handleSumbit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
