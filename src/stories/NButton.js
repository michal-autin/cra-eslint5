import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import NButton from "../components/NButton";

storiesOf("NButton", module)
  .add("with text", () => <NButton onClick={action("clicked")}>Hello Button</NButton>)
  .add("with some emoji", () => (
    <NButton onClick={action("clicked")}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </NButton>
  ))
  .add("with text", () => <NButton onClick={action("clicked")}>Hello Button</NButton>);
