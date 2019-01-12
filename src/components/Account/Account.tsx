import { Icon } from "antd";
import * as React from "react";

import { AccountData } from "../../pages/index";

import styles from "./Account.module.scss";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_986738_6tfptot7sa.js"
});

export default ({ name, label, link }: AccountData) => (
  <div className={styles.container}>
    <a href={link} target="_blank" rel="noopener">
      <IconFont type={`icon-${name}`} />
    </a>
  </div>
);
