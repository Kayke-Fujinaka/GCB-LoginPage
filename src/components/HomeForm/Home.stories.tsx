import { Story, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { HomeForm, HomeProps } from ".";

export default {
  title: "Pages/Home",
  component: HomeForm,
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
} as ComponentMeta<typeof HomeForm>;

const Template: Story<HomeProps> = (args) => <HomeForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: "kayke",
  user_email: "kayke@gmail.com",
};
Default.parameters = {
  backgrounds: { default: "desktop" },
};
Default.args = {
  username: "Kayke Fujinaka",
  user_email: "kayke@gmail.com",
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
Mobile.args = {
  username: "kayke",
  user_email: "kayke@gmail.com",
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
Mobile.args = {
  username: "Kayke Fujinaka",
  user_email: "kayke@gmail.com",
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
