import { graphql } from "gatsby";
import * as React from "react";

import About from "../components/About";
import Layout from "../components/Layout";
import Work from "../components/Work";
import Works from "../components/Works";

import * as styles from "./Index.module.scss";

export interface Work {
  name: string;
  description: string;
  link?: string;
  github: string;
  youtube?: string;
}

interface IndexProps {
  data: {
    allWorksJson: {
      edges: { node: Work }[];
    };
  };
}

export default (props: IndexProps) => {
  // tslint:disable-next-line:no-console
  console.log(props.data.allWorksJson);
  return (
    <Layout>
      <div className={styles.Container}>
        <About />
        <Works>
          {props.data.allWorksJson.edges.map(value => (
            <Work
              name={value.node.name}
              description={value.node.description}
              link={value.node.link}
              github={value.node.github}
              youtube={value.node.youtube}
            />
          ))}
        </Works>
      </div>
    </Layout>
  );
};

export const indexQuery = graphql`
  query IndexQuery {
    allWorksJson {
      edges {
        node {
          name
          description
          link
          github
        }
      }
    }
  }
`;
