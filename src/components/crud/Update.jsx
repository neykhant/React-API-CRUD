//jshint ignore:start
import axios from "axios";
import React, { useState, useEffect } from "react";
import Style from "./Style.module.css";
import { useNavigate, useParams } from "react-router-dom";

//https://621899991a1ba20cbaa557d9.mockapi.io/fakeData

const Update = () => {
  const navigate = useNavigate();
  const param = useParams();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    checkbox: false,
  });

  useEffect(() => {
    axios
      .put(`https://621899991a1ba20cbaa557d9.mockapi.io/fakeData/${param.id}`)
      .then((res) => {
        // setData({res.data})
        setData({
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          checkbox: res.data.checkbox,
        });
      });
  }, [param]);

  const updateAPIData = () => {
    axios.put(
      `https://621899991a1ba20cbaa557d9.mockapi.io/fakeData/${param.id}`,
      data
    );
window.location="/read";
    // navigate("/read");
  };

  return (
    <div className={Style.create}>
      <h1>Update</h1>
      <div className="form_group">
        <div className={Style.form_container}>
          <label className={Style.email}>FirstName</label>
          <input
            value={data.firstName}
            onChange={(e) =>
              setData((prevState) => {
                return {
                  ...prevState,
                  firstName: e.target.value,
                };
              })
            }
            type="text"
            className={Style.email_input}
            id="email"
          />
        </div>
        <div className={Style.form_container}>
          <label className={Style.username}>LastName</label>
          <input
            value={data.lastName}
            onChange={(e) =>
              setData((prevState) => {
                return {
                  ...prevState,
                  lastName: e.target.value,
                };
              })
            }
            type="username"
            className={Style.email_input}
            id="username"
          />
        </div>
        <div>
          <input
            type="checkbox"
            value={data.checkbox}
            onChange={(e) =>
              setData((prevState) => {
                return {
                  ...prevState,
                  checkbox: e.target.value,
                };
              })
            }
          />
        </div>
        <div>
          <button
            onClick={updateAPIData}
            className={Style.form_buttom}
            type="submit"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
