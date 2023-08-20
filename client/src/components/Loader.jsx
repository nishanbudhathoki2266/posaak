import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <Audio
      height="50"
      width="50"
      radius="9"
      color="#67595E"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
};

export default Loader;
