import React, { useState } from "react";

function SmurfForm(props) {
  const [smurf, setSmurf] = useState({ name: "", height: "", age: "" });

  const handleChange = event => {
    console.log(smurf);
    setSmurf({ ...smurf, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(smurf);
  };

  return (
    <div className="formContainer">
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
          required
        />
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default SmurfForm;
