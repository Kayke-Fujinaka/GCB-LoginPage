import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Button, ButtonProps } from ".";
import theme from "../../styles/theme";

export default {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      values: [
        {
          name: "desktop",
          value: "#FFEBD6",
        },
        {
          name: "mobile",
          value: "#423B32",
        },
      ],
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>My Button</Button>
);

export const ButtonDesktop = Template.bind({});
ButtonDesktop.args = {
  bgColor: theme.primaryColor,
  color: theme.button,
  type: "submit",
};
ButtonDesktop.parameters = {
  backgrounds: { default: "desktop" },
};
ButtonDesktop.decorators = [
  (Story) => {
    return (
      <div style={{ display: "flex", justifyContent: "center", height: "30rem", alignItems: "center" }}>
        <Story />
      </div>
    );
  },
];

export const ButtonMobile = Template.bind({});
ButtonMobile.args = {
  color: theme.primaryColor,
  bgColor: theme.secondColor,
  type: "submit",
};
ButtonMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
ButtonMobile.decorators = [
  (Story) => {
    return (
      <div style={{ display: "flex", justifyContent: "center", height: "30rem", alignItems: "center" }}>
        <Story />
      </div>
    );
  },
];
