import * as React from "react";

import { CareerContentData } from "../../pages/index";

import styles from "./CareerContent.module.scss";

export default ({ name, term, position, description }: CareerContentData) => (
  <div className={styles.container}>
    <h3>{name}</h3>
    <p>{term}</p>
    <p>{position}</p>
  </div>
);
