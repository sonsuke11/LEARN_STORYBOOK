import { storiesOf } from "@storybook/react";
import React from "react";

import Input from "../Input";

const stories = storiesOf("Input", module).addParameters({
  readme: {
    content: "InputExample",
    sidebar: "InputReadme",
  },
});

stories.add("Input", () => (
  <div>
    <Input label="Login user" error={"error"} />
  </div>
));
