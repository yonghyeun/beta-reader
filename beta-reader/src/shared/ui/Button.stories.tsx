import { Button } from "./Button";
import { StoryObj } from "@storybook/react";

export default {
  title: "Shared/Button",
  component: Button
};

export const Default: StoryObj<typeof Button> = {
  render: () => <Button />
};
