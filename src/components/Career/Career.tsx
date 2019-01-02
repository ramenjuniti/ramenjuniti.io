import * as React from "react";

import CareerContent from "../CareerContent";

import { CareerContentData } from "../../pages/index";

import styles from "./Career.module.scss";

interface Props {
  career: CareerContentData[];
}

export default ({ career }: Props) => (
  <div className={styles.container}>
    <h2>Career</h2>
    {career.map(item => (
      <CareerContent
        name={item.name}
        term={item.term}
        position={item.position}
        description={item.description}
      />
    ))}
  </div>
);
