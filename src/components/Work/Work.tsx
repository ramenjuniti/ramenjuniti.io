import * as React from "react";

import styles from "./Work.module.scss";

export default ({ children }: any) => (
  <div className={styles.container}>
    <h2>Work</h2>
    {children}
  </div>
);
