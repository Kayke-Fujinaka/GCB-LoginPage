import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { RegisterForm } from ".";

export default {
  title: "Pages/Register",
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
          paddingTop: "30rem",
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
          marginTop: "20rem",
        }}
      >
        <Story />
      </div>
    );
  },
];
