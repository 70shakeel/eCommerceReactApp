import React from "react";
import { Button } from "reactstrap";

const Buttons = ({ children, ...otherProps }) => {
  return (
    <Button color="primary" {...otherProps}>
      {children}
    </Button>
  );
};

export default Buttons;
