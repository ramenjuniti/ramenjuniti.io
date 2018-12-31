import React from "react";

import { storiesOf } from "@storybook/react";

import WorkContent from "./WorkContent";

storiesOf("WorkContent", module).add("WorkContent", () => (
  <WorkContent
    name={""}
    description={""}
    link={""}
    github={""}
    youtube={""}
    tag={[]}
  />
));
