import React from "react";

import { Spin } from "./styles/spinner2";

function Spinner2({ show }) {
  return <Spin data-testid="spinner" show={show}></Spin>;
}

export default Spinner2;
