import { Avatar } from "antd";
import * as React from "react";

import styles from "./Header.module.scss";

interface Props {
  children: JSX.Element[];
}

export default ({ children }: Props) => (
  <header className={styles.container}>
    <div>
      <Avatar size={64} />
      <h1>ramenjuniti</h1>
    </div>
    <div>{children}</div>
  </header>
);
