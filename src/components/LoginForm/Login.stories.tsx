import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { LoginForm } from ".";

export default {
  title: "LoginForms/LoginForm",
  component: LoginForm,
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
} as ComponentMeta<typeof LoginForm>;

const Template: Story<typeof LoginForm> = (args) => <LoginForm />;

export const LoginFormDesktop = Template.bind({});
LoginFormDesktop.parameters = {
  backgrounds: { default: "desktop" },
};
LoginFormDesktop.decorators = [
  (Story) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "30rem",
          alignItems: "center",
          paddingTop: "20rem"
        }}
      >
        <Story />
      </div>
    );
  },
];

export const LoginFormMobile = Template.bind({});
LoginFormMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
LoginFormMobile.decorators = [
  (Story) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "30rem",
          alignItems: "center",
          paddingTop: "20rem"
        }}
      >
        <Story />
      </div>
    );
  },
];