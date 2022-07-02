import { Story, ComponentMeta } from "@storybook/react";
import { CheckBox, CheckBoxProps } from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import theme from "../../styles/theme";

export default {
  title: "CheckBoxs/CheckBox",
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
  },
} as ComponentMeta<typeof CheckBox>;

const Template: Story<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const InputCheckBox = Template.bind({});
InputCheckBox.args = {
  id: "terms",
  htmlFor: "terms",
  name: "terms",
  checked: false,
  type: "checkbox",
  required: true,
};

export const InputCheckBoxMobile = Template.bind({});
InputCheckBoxMobile.args = {
  id: "terms",
  htmlFor: "terms",
  name: "terms",
  checked: false,
  type: "checkbox",
  required: true,
};
InputCheckBoxMobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
