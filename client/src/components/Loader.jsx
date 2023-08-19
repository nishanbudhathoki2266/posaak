import React from "react";
import { Watch } from "react-loader-spinner";

const Loader = () => {
  return (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#67595E"
      ariaLabel="watch-loading"
      visible={true}
    />
  );
};

export default Loader;
