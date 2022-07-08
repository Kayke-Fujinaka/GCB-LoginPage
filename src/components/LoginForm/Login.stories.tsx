import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { LoginForm } from ".";

export default {
  title: "Pages/Login",
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

export const Default = Template.bind({});
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
          paddingTop: "20rem",
        }}
      >
        <Story />
      </div>
    );
  },
];

export const Mobile = Template.bind({});
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
          paddingTop: "20rem",
        }}
      >
        <Story />
      </div>
    );
  },
];
