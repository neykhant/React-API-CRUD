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

    // const back = () =>{
    //   navigate.push('/read')
    // }
    const postData = () => {
      axios.post(`https://621899991a1ba20cbaa557d9.mockapi.io/fakeData`, {
          firstName,
          lastName,
          checkbox
      })

      navigate('/read')
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

      {/* <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form> */}
    </div>
  );
};


export default Create;
