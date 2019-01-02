import React from "react";

import { array, text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import WorkContent from "./WorkContent";

storiesOf("WorkContent", module)
  .addDecorator(withKnobs)
  .add("WorkContent", () => (
    <WorkContent
      name={text("name", "")}
      description={text("description", "")}
      link={text("link", "")}
      github={text("github", "")}
      youtube={text("youtube", "")}
      tag={array("tag", [])}
    />
  ));
