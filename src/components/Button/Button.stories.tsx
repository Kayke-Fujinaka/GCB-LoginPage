import { Story, ComponentMeta } from "@storybook/react";
import { Button, ButtonProps } from ".";
import theme from "../../styles/theme";

export default {
  title: "Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>My Button</Button>
);

export const Desktop = Template.bind({});
Desktop.args = {
  bgColor: theme.primaryColor,
  color: theme.button,
  type: "submit",
};

export const Mobile = Template.bind({});
Mobile.args = {
  color: theme.primaryColor,
  bgColor: theme.secondColor,
  type: "submit",
};
