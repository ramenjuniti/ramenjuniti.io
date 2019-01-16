import { Timeline } from "antd";
import * as React from "react";

import IconFont from "../../utils/IconFont";
import CareerContent from "../CareerContent";

import { CareerContentData } from "../../pages/index";

import styles from "./Career.module.scss";

interface Props {
  career: CareerContentData[];
}

export default ({ career }: Props) => (
  <article className={styles.container}>
    <h2>Career</h2>
    <Timeline className={styles.TimelineContainer}>
      {career.map(item => (
        <Timeline.Item
          dot={
            <IconFont type={`icon-${item.type}`} className={styles.IconFont} />
          }
        >
          <CareerContent
            name={item.name}
            term={item.term}
            position={item.position}
            description={item.description}
          />
        </Timeline.Item>
      ))}
    </Timeline>
  </article>
);
