import * as React from "react";

import { AccountData } from "../../pages/index";
import IconFont from "../../utils/IconFont";

import styles from "./Account.module.scss";

export default ({ name, label, link }: AccountData) => (
  <a href={link} className={styles.container} target="_blank" rel="noopener">
    <IconFont type={`icon-${name}`} />
  </a>
);
