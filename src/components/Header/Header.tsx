import { Avatar } from "antd";
import * as React from "react";

import styles from "./Header.module.scss";

interface Props {
  children: JSX.Element[];
}

export default ({ children }: Props) => (
  <header className={styles.container}>
    <div>
      <Avatar size={96} />
      <h1>ramenjuniti</h1>
      <p>a student.</p>
      <div>{children}</div>
    </div>
  </header>
);
