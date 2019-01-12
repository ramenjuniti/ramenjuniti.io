import { Avatar } from "antd";
import * as React from "react";

import styles from "./Header.module.scss";

interface Props {
  children: JSX.Element[];
}

export default ({ children }: Props) => (
  <header className={styles.container}>
    <div className={styles.avatorContainer}>
      <Avatar size={64} />
      <h1>ramenjuniti</h1>
    </div>
    <div className={styles.accountsContainer}>{children}</div>
  </header>
);
