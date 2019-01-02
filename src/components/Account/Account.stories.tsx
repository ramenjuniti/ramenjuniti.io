import React from "react";

import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

import Account from "./Account";

storiesOf("Account", module)
  .addDecorator(withKnobs)
  .add("Account", () => (
    <Account
      name={text("name", "")}
      label={text("label", "")}
      link={text("link", "")}
    />
  ));
