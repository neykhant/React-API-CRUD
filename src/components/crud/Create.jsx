//jshint ignore:start
import axios from "axios";
import React, { useState} from "react";
import Style from "./Style.module.css";
import { useNavigate } from 'react-router-dom';

//https://621899991a1ba20cbaa557d9.mockapi.io/fakeData

const Create = () => {
  const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
      console.log("createDate");
      axios.post(`https://621899991a1ba20cbaa557d9.mockapi.io/fakeData`, {
          firstName,
          lastName,
          checkbox
      }).then(() =>{
        navigate('/read');
      })
      console.log(firstName)
      console.log(lastName)
      console.log(checkbox)
// window.location = "/read";
      // navigate('/read')
  }
  return (
    <div className={Style.create}>
      <h1>Create</h1>
      <div className="form_group">
        <div className={Style.form_container}>
          <label className={Style.email}>Email address</label>
          <input onChange={e => setFirstName(e.target.value) } type="email" className={Style.email_input} id="email" />
        </div>
        <div className={Style.form_container}>
          <label className={Style.username}>Username</label>
          <input onChange={e => setLastName(e.target.value) } type="username" className={Style.email_input} id="username" />
        </div>
        <div>
          <input type="checkbox" onChange={e => setCheckbox(!checkbox)} />
        </div>
        <div >
            <button  onClick={postData} className={Style.form_buttom} type="submit">Add</button>
        </div>
      </div>
    </div>
  );
};


export default Create;
