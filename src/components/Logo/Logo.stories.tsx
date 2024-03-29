import { Story, ComponentMeta } from "@storybook/react";
import { Logo, LogoProps } from ".";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/Logo",
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

export const Default = Template.bind({});
Default.args = {
  src: "/logo-desktop.svg",
  alt: "Logo GCB Desktop",
  height: 120,
  width: 420,
};
Default.parameters = {
  backgrounds: { default: "desktop" },
};

export const Mobile = Template.bind({});
Mobile.args = {
  src: "/logo-mobile.svg",
  alt: "Logo GCB Mobile",
  height: 120,
  width: 420,
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonex",
  },
  backgrounds: { default: "mobile" },
};
