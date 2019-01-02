import * as React from "react";

import { AccountData } from "../../pages/index";

import styles from "./Account.module.scss";

export default ({ name, label, link }: AccountData) => (
  <div className={styles.container}>
    <h3>{name}</h3>
    <p>{label}</p>
    <p>{link}</p>
  </div>
);
