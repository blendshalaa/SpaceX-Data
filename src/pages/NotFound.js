import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      404 NotFound
      <Link to="/">Rockets from Link</Link>
    </div>
  );
}

export default NotFound;
