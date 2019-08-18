import { configure } from "@storybook/react";

function loadStories() {
  require("../src/stories");
  require("../src/stories/NButton");
}

configure(loadStories, module);
