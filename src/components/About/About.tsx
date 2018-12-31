import * as React from "react";

import { MarkdownData } from "../../pages/index";

export default ({ html }: MarkdownData) => (
  <div>
    <h1>About</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);
