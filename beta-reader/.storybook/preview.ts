import { createElement } from "react";

import "../app/globals.css";
import "./storybook.css";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "custom",
      values: [
        {
          name: "custom",
          value: "#0000002A"
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => {
      return createElement(
        "div",
        { className: "decorator" },
        createElement(Story)
      );
    }
  ]
};

export default preview;
