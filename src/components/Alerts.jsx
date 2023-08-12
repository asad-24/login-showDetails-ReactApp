import React from "react";

export default function Alert(props) {
  return (
  props.alerts &&
      <div className={`alert alert-${props.alerts.type} mb-0`} role="alert">
      <strong>{props.alerts.type}:</strong> {props.alerts.msg}
      </div>
 
  );
}
