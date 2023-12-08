import React, { useState } from "react";
import "./form.css";
import axios from "axios";

export default function Form() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    salary: "",
    designation: "",
  });

  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const addData = async (event) => {
    event.preventDefault();
    const { name, email, phone, address, salary, designation } = user;

    axios
      .post("http://localhost:5000/add-user", {
        name: name,
        email: email,
        phone: phone,
        address: address,
        salary: salary,
        designation: designation,
      })
      .then(function (response) {
        // console.log(response);
        if (response.status === 200) {
          window.alert("Already have user");
        }
        if (response.status === 201) {
          window.alert("User added successfully");
        }
        if (response.status === 500) {
          window.alert("Something went wrong. Try again...!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form>
        <h1> Add User </h1>
        <div className="inputFields">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={handleInputs} />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleInputs} />

          <label htmlFor="phone">Mobile</label>
          <input type="text" name="phone" onChange={handleInputs} />

          <label htmlFor="address">Address</label>
          <input type="text" name="address" onChange={handleInputs} />

          <label htmlFor="salary">Salary</label>
          <input type="text" name="salary" onChange={handleInputs} />

          <label for="designation">Designation</label>
          <select name="designation" onChange={handleInputs}>
          <option value="none" selected disabled hidden>Select designation</option>
            <option value="frontend_developer">Front-End Developer</option>
            <option value="php_developer">PHP Developer</option>
            <option value="python_developer">Python Developer</option>
            <option value="rails_developer">Rails Developer</option>
            <option value="web_designer">Web Designer</option>
            <option value="wordpress_developer">Wordpress Developer</option>
            <option value="business_owner">Business Owner</option>
            <option value="freelancer">Freelancer</option>
          </select>

          <div className="btn_cl">
            <button className="btn" onClick={addData}>
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
