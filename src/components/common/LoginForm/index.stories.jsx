import { storiesOf } from "@storybook/react";
import React from "react";

import LoginForm from "../LoginForm";

const stories = storiesOf("Login", module).addParameters({
  readme: {
    content: "LoginForm",
    sidebar: "InputReadme",
  },
});

stories.add("LoginForm", () => (
  <div>
    <LoginForm />
  </div>
));
