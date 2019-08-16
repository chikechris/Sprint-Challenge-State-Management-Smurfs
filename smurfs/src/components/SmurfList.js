import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../actions";

function SmufList(props) {
  useEffect(() => {
    props.getSmurfs();
  });
  return (
    <div>
      <h1> Smurfs</h1>
      {props.smurfs &&
        props.smurfs.map((smurf, id) => {
          return (
            <div className="smurfCard" key={id}>
              <h3>Name: {smurf.name}</h3>
              <h3>Age: {smurf.age} </h3>
              <h3>Height: {smurf.height} </h3>
            </div>
          );
        })}
    </div>
  );
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmufList);
