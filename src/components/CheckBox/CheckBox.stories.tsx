import { Story, ComponentMeta } from "@storybook/react";
import { CheckBox, CheckBoxProps } from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/Checkbox",
  component: CheckBox,
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
          value: "#FFEBD6",
        },
        {
          name: "mobile",
          value: "#423B32",
        },
      ],
    },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "checkbox",
  type: "checkbox",
};
Default.parameters = {
  backgrounds: { default: "desktop" },
};
Default.decorators = [
  (Story) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "30rem",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    );
  },
];

export const Mobile = Template.bind({});
Mobile.args = {
  name: "checkbox",
  type: "checkbox",
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
Mobile.decorators = [
  (Story) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "30rem",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    );
  },
];
