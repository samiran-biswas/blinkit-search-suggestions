import React from "react";

const Spinner = () => (
  <div className="position-absolute top-0 end-0 mt-2 me-2">
    <div className="spinner-border text-primary" role="status" style={{ width: "1.5rem", height: "1.5rem" }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Spinner;
