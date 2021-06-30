import { addParameters } from "@storybook/react";
import { addDecorator } from "@storybook/react";
import { withContexts } from "@storybook/addon-contexts/react";
import { contexts } from "./contexts";
import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

addParameters({
  backgrounds: {
    default: "Default theme",
    value: [
      { name: "Default theme", value: "#ffffff", default: true },
      { name: "Dark theme", value: "#4f1271" }
    ]
  }
});

addDecorator(withContexts(contexts));
addDecorator(withKnobs);
addDecorator(withA11y);
