import * as React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "./index.module.scss";

export default ({ children }: any) => (
  <div className={styles.container}>
    <Header />
    {children}
    <Footer />
  </div>
);
