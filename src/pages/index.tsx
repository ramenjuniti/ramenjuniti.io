import { Divider } from "antd";
import { graphql } from "gatsby";
import * as React from "react";

import About from "../components/About";
import Career from "../components/Career";
import Layout from "../components/Layout";
import Work from "../components/Work";

import styles from "./index.module.scss";

export interface MarkdownData {
  html: string;
}

export interface AccountData {
  name: string;
  label: string;
  link: string;
}

export interface CareerContentData {
  name: string;
  term: string;
  position: string;
  type?: string;
}

export interface WorkContentData {
  name: string;
  description: string;
  link?: string;
  github: string;
  youtube?: string;
  tag: string[];
}

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string;
        subTitle: string;
      };
    };
    allMarkdownRemark: {
      edges: { node: MarkdownData }[];
    };
    allAccountsJson: {
      edges: { node: AccountData }[];
    };
    allCareerJson: {
      edges: { node: CareerContentData }[];
    };
    allWorkJson: {
      edges: { node: WorkContentData }[];
    };
  };
}

export default ({ data }: Props) => {
  const siteMetadata = data.site.siteMetadata;
  const html = data.allMarkdownRemark.edges[0].node.html;
  const accounts = data.allAccountsJson.edges.map(item => item.node);
  const work = data.allWorkJson.edges.map(item => item.node);
  const career = data.allCareerJson.edges.map(item => item.node);

  return (
    <Layout siteMetadata={siteMetadata} accounts={accounts}>
      <div className={styles.container}>
        <About html={html} />
        <Divider />
        <Work work={work} />
        <Divider />
        <Career career={career} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query indexQuery {
    site {
      siteMetadata {
        title
        subTitle
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          headings {
            depth
            value
          }
        }
      }
    }
    allAccountsJson {
      edges {
        node {
          name
          label
          link
        }
      }
    }
    allCareerJson {
      edges {
        node {
          name
          term
          position
          type
        }
      }
    }
    allWorkJson {
      edges {
        node {
          name
          description
          link
          github
          youtube
          tag
        }
      }
    }
  }
`;
