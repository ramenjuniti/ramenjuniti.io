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
    {work.map(item => (
      <WorkContent
        name={item.name}
        description={item.description}
        link={item.link}
        github={item.github}
        youtube={item.youtube}
        tag={item.tag}
      />
    ))}
  </div>
);
