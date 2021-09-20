import { storiesOf } from "@storybook/react";
import React from "react";

import Button from "../Button";

const stories = storiesOf("Button", module).addParameters({
  readme: { content: "Button", sidebar: "InputReadme" },
});

stories.add("Button", () => (
  <div>
    <Button />
  </div>
));
