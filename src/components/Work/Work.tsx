import * as React from "react";

import { Work } from "../../pages/index";

export default (props: Work) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};
