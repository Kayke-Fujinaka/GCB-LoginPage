import { Story, ComponentMeta } from "@storybook/react";
import { CheckBox, CheckBoxProps } from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Checkboxs/Checkboxs",
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

export const CheckboxDesktop = Template.bind({});
CheckboxDesktop.args = {
  id: "checkbox",
  htmlFor: "checkbox",
  name: "checkbox",
  checked: false,
  type: "checkbox",
  required: true,
};
CheckboxDesktop.parameters = {
  backgrounds: { default: "desktop" },
};

export const CheckboxMobile = Template.bind({});
CheckboxMobile.args = {
  id: "checkbox",
  htmlFor: "checkbox",
  name: "checkbox",
  checked: false,
  type: "checkbox",
  required: true,
};
CheckboxMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
