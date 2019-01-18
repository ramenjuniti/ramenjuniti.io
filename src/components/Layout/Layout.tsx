import { BackTop, Col, Row } from "antd";
import * as React from "react";
import Helmet from "react-helmet";

import Account from "../Account";
import Footer from "../Footer";
import Header from "../Header";

import myIcon from "../../assets/img/myicon.png";

import { AccountData } from "../../pages/index";

import styles from "./index.module.scss";

interface Props {
  siteMetadata: {
    title: string;
    subTitle: string;
    description: string;
    url: string;
  };
  accounts: AccountData[];
  children: JSX.Element;
}

export default ({ siteMetadata, accounts, children }: Props) => {
  return (
    <div className={styles.container}>
      <Helmet
        title={siteMetadata.title}
        meta={[
          { name: "description", content: siteMetadata.description },
          { property: "og:title", content: siteMetadata.title },
          { property: "og:type", content: "website" },
          { property: "og:url", content: siteMetadata.url },
          { property: "og:image", content: myIcon },
          { property: "og:description", content: siteMetadata.description },
          { name: "twitter:card", content: "summary" },
          { name: "twitter:site", content: `@${siteMetadata.title}` }
        ]}
      />
      <Row type="flex">
        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
          <Header {...siteMetadata}>
            {accounts.map(item => (
              <Account {...item} />
            ))}
          </Header>
        </Col>
        <Col lg={{ span: 16 }} xs={{ span: 24 }}>
          {children}
          <Footer />
        </Col>
      </Row>
      <BackTop />
    </div>
  );
};
