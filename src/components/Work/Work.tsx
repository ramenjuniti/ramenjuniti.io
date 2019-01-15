import { Col, Row } from "antd";
import * as React from "react";

import WorkContent from "../WorkContent";

import { WorkContentData } from "../../pages/index";

import styles from "./Work.module.scss";

interface Props {
  work: WorkContentData[];
}

export default ({ work }: Props) => (
  <div className={styles.container}>
    <h2>Work</h2>
    <Row type="flex">
      {work.map(item => (
        <Col lg={{ span: 12 }} xs={{ span: 24 }}>
          <WorkContent
            name={item.name}
            description={item.description}
            link={item.link}
            github={item.github}
            youtube={item.youtube}
            tag={item.tag}
          />
        </Col>
      ))}
    </Row>
  </div>
);
