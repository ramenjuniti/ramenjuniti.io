import * as React from "react";

import { MarkdownData } from "../../pages/index";

import styles from "./About.module.scss";

export default ({ html }: MarkdownData) => (
  <div className={styles.container}>
    <h2>About</h2>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </div>
);
