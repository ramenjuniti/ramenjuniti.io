import * as React from "react";

import styles from "./Career.module.scss";

export default ({ children }: any) => (
  <div className={styles.container}>
    <h2>Career</h2>
    {children}
  </div>
);
