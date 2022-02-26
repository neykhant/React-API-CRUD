//jshint ignore:start
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Read = () => {
  const [APIData, setAPIData] = useState([]);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
    // console.log(data)
  };

  const getData = () => {
    axios
      .get(`https://621899991a1ba20cbaa557d9.mockapi.io/fakeData`)
      .then((res) => {
        setAPIData(res.data);
      });
  };

  useEffect(() => {
    getData();
    console.log("read")

    return () => {
      getData();
    };
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`https://621899991a1ba20cbaa557d9.mockapi.io/fakeData/${id}`)
      .then(() => {
        var filter = APIData.filter((data) => data.id !== id);
        setAPIData(filter);
      });
  };

  return (
    <div className="page-heading">
      {/* <h1>Read</h1> */}
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Check</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.checkbox ? "Checked" : "Unchecked"}</td>
              <td>
                <Link to={`/update/${data.id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => onDelete(data.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;
