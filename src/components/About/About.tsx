import * as React from "react";

import { MarkdownData } from "../../pages/index";

export default ({ html }: MarkdownData) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);
