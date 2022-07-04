import { Story, ComponentMeta } from "@storybook/react";
import { Logo, LogoProps } from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Logos/Logo",
  component: Logo,
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
} as ComponentMeta<typeof Logo>;

const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const LogoDesktop = Template.bind({});
LogoDesktop.args = {
  src: "/logo-desktop.svg",
  alt: "Logo GCB Desktop",
  height: 120,
  width: 420,
};
LogoDesktop.parameters = {
  backgrounds: { default: "desktop" },
};
LogoDesktop.decorators = [
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

export const LogoMobile = Template.bind({});
LogoMobile.args = {
  src: "/logo-mobile.svg",
  alt: "Logo GCB Mobile",
  height: 120,
  width: 420,
};
LogoMobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
LogoMobile.decorators = [
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
