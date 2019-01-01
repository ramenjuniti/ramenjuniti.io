import * as React from "react";

import { MarkdownData } from "../../pages/index";

import stylesc from "./About.module.scss";

export default ({ html }: MarkdownData) => (
  <div className={stylesc.container}>
    <h1>About</h1>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);
