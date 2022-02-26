//jshint ignore:start
import axios from "axios";
import React, { useState, useEffect} from "react";
import Style from "./Style.module.css";
import { useNavigate } from 'react-router-dom';


//https://621899991a1ba20cbaa557d9.mockapi.io/fakeData



const Update = () => {
  
  const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);

    useEffect(() => {
      setID(localStorage.getItem('ID'))
      setFirstName(localStorage.getItem('First Name'));
      setLastName(localStorage.getItem('Last Name'));
      setCheckbox(localStorage.getItem('Checkbox Value'))
}, []);

  const updateAPIData = () => {
    axios.put(`https://621899991a1ba20cbaa557d9.mockapi.io/fakeData/${id}`, {
        firstName,
         lastName,
         checkbox
	})
  navigate('/read')
}


  return (
    <div className={Style.create}>
      <h1>Update</h1>
      <div className="form_group">
        <div className={Style.form_container}>
          <label className={Style.email}>FirstName</label>
          <input value={firstName} onChange={e => setFirstName(e.target.value) } type="email" className={Style.email_input} id="email" />
        </div>
        <div className={Style.form_container}>
          <label className={Style.username}>LastName</label>
          <input value={lastName} onChange={e => setLastName(e.target.value) } type="username" className={Style.email_input} id="username" />
        </div>
        <div>
          <input type="checkbox" checked={checkbox} onChange={e => setCheckbox(!checkbox)} />
        </div>
        <div >
            <button onClick={updateAPIData} className={Style.form_buttom} type="submit">Update</button>
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


export default Update;
