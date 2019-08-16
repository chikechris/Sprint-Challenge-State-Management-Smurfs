import React, { useState } from "react";
import { addSmurf } from "../actions";
import { connect } from "react-redux";

import styled from "styled-components";

const FormStyle = styled.div`
  body {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    transform: translateY(-20%);
    position: absolute;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  form {
    display: flex;
    max-width: 50%;
    width: 100%;
    height: 100%;
    margin: 0 auto;

    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
  }

  input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 4%;
    font-family: "Serif ", "Georgia ";
    margin: 5px 0;
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #282c34;
    padding: 10px;
    color: "white";
    width: 80%;
  }
  button {
    background: #282c34;
    text-align: center;
    padding: 5px;
    margin-top: 10px;
    border-radius: 30px;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

function SmurfForm(props) {
  const [smurf, setSmurf] = useState({ name: "", height: "", age: "" });

  const handleChange = event => {
    console.log(smurf);
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.addSmurf(smurf);
    setSmurf({ name: "", height: "", age: "" });
  };

  return (
    <FormStyle>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          value={smurf.name}
          name="name"
          onChange={handleChange}
          required
        />
        <input
          placeholder="height"
          type="text"
          value={smurf.height}
          name="height"
          onChange={handleChange}
          required
        />
        <input
          placeholder="age"
          type="number"
          value={smurf.age}
          name="age"
          onChange={handleChange}
          required
        />
        <button>Submit!</button>
      </form>
    </FormStyle>
  );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
