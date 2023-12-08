import React from "react";
import "./usertable.css";

function UserTable({users}) {

  return (
    <>
      <div class="container">
        <h2>User Data</h2>
        <table id="customers">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
          {users.map((user)=>(
            <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td>{user.salary}</td>
            <td>{user.designation}</td>
          </tr>
          ))}
          
        </table>
      </div>
    </>
  );
}

export default UserTable;
