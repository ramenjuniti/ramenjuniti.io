import { graphql } from "gatsby";
import * as React from "react";

import Account from "../components/Account";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { AccountData } from "../pages/index";

import styles from "./index.module.scss";

interface Props {
  accounts: AccountData[];
  children: JSX.Element;
}

export default ({ accounts, children }: Props) => {
  return (
    <div className={styles.container}>
      <Header>
        {accounts.map(item => (
          <Account name={item.name} label={item.label} link={item.link} />
        ))}
      </Header>
      {children}
      <Footer />
    </div>
  );
};
