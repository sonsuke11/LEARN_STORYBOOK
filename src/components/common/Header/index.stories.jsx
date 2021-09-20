import { storiesOf } from "@storybook/react";
import React from "react";
import Header from "./index";

const stories = storiesOf("Header", module).addParameters({
  readme: {
    content: "Navbar",
  },
});

stories.add("Navbar", () => (
  <div>
    <Header />
  </div>
));
