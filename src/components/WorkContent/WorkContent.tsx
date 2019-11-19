import { Card, Tag } from "antd";
import * as React from "react";

import { WorkContentData } from "../../pages/index";
import IconFont from "../../utils/IconFont";

import styles from "./WorkContent.module.scss";

export default ({
  name,
  description,
  link,
  github,
  youtube,
  tag
}: WorkContentData) => {
  const title = (
    <div className={styles.titleContainer}>
      <h3>{name}</h3>
      <div>
        {link && (
          <a href={link} target="_blank" rel="noopener">
            <IconFont type="icon-link" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener">
            <IconFont type="icon-GitHub" />
          </a>
        )}
        {youtube && (
          <a href={youtube} target="_blank" rel="noopener">
            <IconFont type="icon-youtube" />
          </a>
        )}
      </div>
    </div>
  );
  return (
    <Card title={title} hoverable={true} className={styles.container}>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <div>
        {tag.map(item => (
          <Tag color="orange" className={styles.tab}>
            {item}
          </Tag>
        ))}
      </div>
    </Card>
  );
};
