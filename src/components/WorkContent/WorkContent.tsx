import * as React from "react";

import { WorkContentData } from "../../pages/index";

import styles from "./WorkContent.module.scss";

export default ({
  name,
  description,
  link,
  github,
  youtube,
  tag
}: WorkContentData) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};
