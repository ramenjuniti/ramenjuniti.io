import * as React from "react";
import FadeIn from "react-fade-in";

import { MarkdownData } from "../../pages/index";

import styles from "./About.module.scss";

export default ({ html }: MarkdownData) => (
  <article className={styles.container}>
    <h2>About</h2>
    <FadeIn>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </FadeIn>
  </article>
);
