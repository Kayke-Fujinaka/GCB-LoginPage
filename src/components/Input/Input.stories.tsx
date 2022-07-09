import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Input, InputProps } from ".";

export default {
  title: "Components/Input",
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

export const Default = Template.bind({});
Default.args = {
  name: "Input",
  type: "Input",
  autoComplete: "off",
  label: "Email",
  htmlFor: "Email",
};
Default.decorators = [
  (Story) => {
    return (
      <div style={{ padding: "0 2rem" }}>
        <Story />
      </div>
    );
  },
];
Default.parameters = {
  backgrounds: { default: "desktop" },
};

export const Mobile = Template.bind({});
Mobile.args = {
  name: "Input",
  type: "Input",
  autoComplete: "off",
  label: "Email",
  htmlFor: "Email",
};
Mobile.decorators = [
  (Story) => {
    return (
      <div style={{ padding: "0 2rem" }}>
        <Story />
      </div>
    );
  },
];
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
