import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../layouts";

import About from "../components/About";
import Work from "../components/Work";
import WorkContent from "../components/WorkContent";

import styles from "./index.module.scss";

export interface MarkdownData {
  html: string;
}

export interface AccoutData {
  name: string;
  label: string;
  link: string;
}

export interface CareerData {
  name: string;
  term: string;
  position: string;
  description: string;
}

export interface WorkContentData {
  name: string;
  description: string;
  link?: string;
  github: string;
  youtube?: string;
  tag: string[];
}

interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: { node: MarkdownData }[];
    };
    allAccoutsJson: {
      edges: { node: AccoutData }[];
    };
    allCareerJson: {
      edges: { node: CareerData }[];
    };
    allWorkJson: {
      edges: { node: WorkContentData }[];
    };
  };
}

export default (props: IndexProps) => {
  // tslint:disable-next-line:no-console
  console.log(props.data);
  return (
    <Layout>
      <div className={styles.Container}>
        <About html={props.data.allMarkdownRemark.edges[0].node.html} />
        <Work>
          {props.data.allWorkJson.edges.map(value => (
            <WorkContent
              name={value.node.name}
              description={value.node.description}
              link={value.node.link}
              github={value.node.github}
              youtube={value.node.youtube}
              tag={value.node.tag}
            />
          ))}
        </Work>
      </div>
    </Layout>
  );
};

export const indexQuery = graphql`
  query indexQuery {
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
          description
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
          tag
        }
      }
    }
  }
`;
