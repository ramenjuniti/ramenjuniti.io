import React from "react";

import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import About from "./About";

storiesOf("About", module)
  .addDecorator(withKnobs)
  .add("About", () => <About html={text("html", "")} />);
