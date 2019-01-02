import React from "react";

import { storiesOf } from "@storybook/react";

import Header from "./Header";

storiesOf("Header", module).add("Header", () => (
  <Header>
    <p>ramen</p>
    <p>ramen</p>
  </Header>
));
