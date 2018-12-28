import { graphql } from "gatsby";
import * as React from "react";

import Layout from "../layouts";

import About from "../components/About";
import Work from "../components/Work";
import WorkContent from "../components/WorkContent";

import * as styles from "./index.module.scss";

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
        <About />
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
  query IndexQuery {
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
          post
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
