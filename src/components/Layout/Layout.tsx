import { Col, Row } from "antd";
import { graphql } from "gatsby";
import * as React from "react";

import Account from "../Account";
import Footer from "../Footer";
import Header from "../Header";

import { AccountData } from "../../pages/index";

import styles from "./index.module.scss";

interface Props {
  accounts: AccountData[];
  children: JSX.Element;
}

export default ({ accounts, children }: Props) => {
  return (
    <div className={styles.container}>
      <Row type="flex">
        <Col md={{ span: 8 }} xs={{ span: 24 }}>
          <Header>
            {accounts.map(item => (
              <Account name={item.name} label={item.label} link={item.link} />
            ))}
          </Header>
        </Col>
        <Col md={{ span: 16 }} xs={{ span: 24 }}>
          {children}
          <Footer />
        </Col>
      </Row>
    </div>
  );
};
