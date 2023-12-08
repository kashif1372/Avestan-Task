import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./home.css";
import Form from "../../components/Form/Form";
import axios from "axios";
import UserTable from "../../components/Table/UserTable";

export default function Home() {

  const [users,setUsers] = useState([]);

  const loadData = async () => {
    axios
      .get("http://localhost:5000/get-all-users")
      .then(function (response) {
        setUsers(response.data.users);
        // console.log(users);
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  useEffect(() => {
    loadData();
  }, [])
  


  return (
    <>
      <div className="home_main">
        <div className="home_form">
          <Navbar />
          <Form />
        </div>
      </div>

      <div className="home_main">
        <button onClick={loadData}>Get All Users</button>
        <div className="user_table"> <UserTable users={users}/></div>
      
      </div>


    </>
  );
}
