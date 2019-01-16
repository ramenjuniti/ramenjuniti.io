import { Avatar } from "antd";
import * as React from "react";

import myIcon from "../../assets/img/myicon.png";

import styles from "./Header.module.scss";

interface Props {
  children: JSX.Element[];
}

export default ({ children }: Props) => (
  <header className={styles.container}>
    <div>
      <Avatar size={96} src={myIcon} />
      <h1>ramenjuniti</h1>
      <p>a student who develops web applications as a hobby.</p>
      <div>{children}</div>
    </div>
  </header>
);
