import * as React from "react";

import { WorkContentData } from "../../pages/index";

export default ({ name, description }: WorkContentData) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};
