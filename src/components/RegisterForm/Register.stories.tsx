import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { RegisterForm } from ".";

export default {
  title: "RegisterForms/RegisterForm",
  component: RegisterForm,
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
} as ComponentMeta<typeof RegisterForm>;

const Template: Story<typeof RegisterForm> = (args) => <RegisterForm />;

export const RegisterFormDesktop = Template.bind({});
RegisterFormDesktop.parameters = {
  backgrounds: { default: "desktop" },
};
export const RegisterFormMobile = Template.bind({});
RegisterFormMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
