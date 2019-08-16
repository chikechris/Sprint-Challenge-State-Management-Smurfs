import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getSmurfs } from "../actions";

function SmufList(props) {
  useEffect(() => {
    props.getSmurfs();
  });
  return (
    <div>
      <h3> Smurfs</h3>
      {props.smurfs &&
        props.smurfs.map(smurf => {
          return (
            <div className="smurfCard">
              <h3>{smurf.name}</h3>
              <h3> {smurf.age} </h3>
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
