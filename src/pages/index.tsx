import { graphql } from "gatsby";
import * as React from "react";

import About from "../components/About";
import Layout from "../components/Layout";
import Work from "../components/Work";
import Works from "../components/Works";

import * as styles from "./Index.module.scss";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      };
    };
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  public render() {
    const { name, tagline } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <div className={styles.Container}>
          <h1>{name}</h1>
          <p>{tagline}</p>
          <About />
          <Works>
            <Work />
          </Works>
        </div>
      </Layout>
    );
  }
}
