import { Avatar } from "antd";
import * as React from "react";

import myIcon from "../../assets/img/myicon.png";

import styles from "./Header.module.scss";

interface Props {
  title: string;
  subTitle: string;
  children: JSX.Element[];
}

export default ({ title, subTitle, children }: Props) => (
  <header className={styles.container}>
    <div>
      <Avatar size={96} src={myIcon} />
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <div>{children}</div>
    </div>
  </header>
);
