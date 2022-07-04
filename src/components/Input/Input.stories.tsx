import { Story, ComponentMeta } from "@storybook/react";
import { Input, InputProps } from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Inputs/Inputs",
  component: Input,
  argTypes: {
    checked: {
      control: "boolean",
    },
  },
  parameters: {
    layout: "fullscreen",
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      values: [
        {
          name: "desktop",
          value: "#FFFFFF",
        },
        {
          name: "mobile",
          value: "#423B32",
        },
      ],
    },
  },
} as ComponentMeta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputDesktop = Template.bind({});
InputDesktop.args = {
  name: "Input",
  type: "Input",
  autoComplete: "off",
  label: "Email",
  htmlFor: "Email",
};
InputDesktop.decorators = [
  (Story) => {
    return (
      <div style={{ padding: "0 2rem" }}>
        <Story />
      </div>
    );
  },
];
InputDesktop.parameters = {
  backgrounds: { default: "desktop" },
};

export const InputMobile = Template.bind({});
InputMobile.args = {
  name: "Input",
  type: "Input",
  autoComplete: "off",
  label: "Email",
  htmlFor: "Email",
};
InputMobile.decorators = [
  (Story) => {
    return (
      <div style={{ padding: "0 2rem" }}>
        <Story />
      </div>
    );
  },
];
InputMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
